Vue.component('route-admin', {
  components: {
    Multiselect: window.VueMultiselect.default
  },
  data() {
    return {
      rabattlista: null,
      rabatt: null,

      mobileRabatt: 'mobileRabatt',
      desktopRabatt: 'desktopRabatt',
      rectlista: [],

      i:3,
      viewBox: "0 0 2111 1219",
      viewBoxStart: "0 0 2111 1219",
      viewBoxTest:"325 629 185 155",
      rabattView: true,
      selected: 'A',
      options: [
        { namn: 'One', value: 'A' },
        { namn: 'Two', value: 'B' },
        { namn: 'Three', value: 'C' }
      ],
      alla_vaxter: null,
      value: null,
      polyList: [],
      svgX: null,
      svgY: null,

      addList: [],
      changed: false
    }
  },
  methods: {

    postChanges(url = ``) {
      this.changed=true;
      // Default options are marked with *
        return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            //https://github.com/github/fetch/issues/505
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(this.addList) // body data type must match "Content-Type" header
        })
        .then(response => response.json()); // parses response to JSON
    },
    redirect() {
			this.$router.push();
		},

    go() {
      let rabatt_id = this.rabatt.id;


      this.$root.rabatt = rabatt_id;
      this.highlight = undefined;
      this.typ = undefined;
      this.$router.push({
        name: 'rabatt',
        params: {
          id: rabatt_id,
        },
      });

    },

    returnImg(){
      this.bild = "/assets/" + this.value.bildnamn;
      return this.bild;

    },

    returnImgToken(){
      if(this.value != null){

        this.polygonbild = "/assets/" + this.value.polygonbild;
        return this.polygonbild;
      }

    },

    adjustPolygon() {

      var str = this.value.polygon;
      var koordLista = str.split(" ");
      var polygon="";
      var x = this.rabatt.x;
      var y = this.rabatt.y;
      //daggkapa, x= -92 -27 , y = -40 -33

      //for index, s in enumerate(koordLista):
      for (i = 0; i < koordLista.length; i++) {
          a = koordLista[i].split(",");
          aFix = parseFloat(a[0]) + parseFloat(x) +  (parseFloat(this.svgX) - parseFloat(x));
          bFix = parseFloat(a[1]) + parseFloat(y) +  (parseFloat(this.svgY) - parseFloat(y));
          // aFix = parseFloat(a[0]) + parseFloat(x) +  (parseFloat(this.svgX) - parseFloat(x)) -124-26 ;
          // bFix = parseFloat(a[1]) + parseFloat(y) +  (parseFloat(this.svgY) - parseFloat(y))-135-19;
          polygon+=" "+aFix.toString()+","+bFix.toString();
        }

      return polygon;
    },


    createVaxt(poly) {

      let vaxt = Object.assign({}, this.value);

      console.log(this.adjustPolygon())
      vaxt.polygon = this.adjustPolygon();
      vaxt.rabatt_id = this.rabatt.id;
      vaxt.id = null;
      delete vaxt.polygonbild;
      console.log(vaxt);
      this.addList.push(vaxt);
    },

    say: function (rabatt) {
      this.rabattView = false;
      this.rabatt=rabatt;
      this.viewBox = "" + this.rabatt.x + " " + this.rabatt.y + " " + this.rabatt.width + " " + this.rabatt.height;

    },

    svgPoint(element, x, y){
      let pt = this.svg.createSVGPoint();
      pt.x = x;
      pt.y = y;
      return pt.matrixTransform(element.getScreenCTM().inverse());
    },

    createRect (svg, x,y, height, width){
      let rect = document.createElementNS(this.NS, 'rect');
        rect.setAttributeNS(null, 'x', x);
        rect.setAttributeNS(null, 'y', y);
        rect.setAttributeNS(null, 'height', '75');
        rect.setAttributeNS(null, 'width', '50');
        // rect.setAttributeNS(null, 'fill', '#'+Math.round(0xffffff * Math.random()).toString(16));
        return rect;
    },

    createPoly (svg){
      let poly = document.createElementNS(this.NS, 'polygon');

        adjustedPoints=this.adjustPolygon();
        //poly.setAttribute("points", this.polygonOrg);
        poly.setAttribute("points", adjustedPoints);
        poly.setAttribute("fill", "#006600")
        // rect.setAttributeNS(null, 'fill', '#'+Math.round(0xffffff * Math.random()).toString(16));
        return poly;
    },


    handleMouseClick(e) {
      if (this.rabattView == false){

        var
        t = e.target,
        x = e.clientX,
        y = e.clientY,

        target = (t == this.svg ? this.svg : t.parentNode),

        svgP = this.svgPoint(target, x, y);

        this.svgX = svgP.x;
        this.svgY = svgP.y;


        var poly= this.createPoly(this.NS);

        target.appendChild(poly);
        console.log(target);

        this.createVaxt(poly);


      }

    }


  },


  created() {
    document.getElementById('navbarIn').style.display = 'flex';
    let outList= document.getElementsByClassName('navbarOut');
    for (let i = 0; i <outList.length; i++){
      outList[i].style.display = 'none';
    }

    this.$root.rabatt = undefined;
    this.$root.vaxt_id = undefined;
    this.$root.typ = undefined;




    fetch(`/api/admin`)
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        this.rabattlista = data.rabattlista;
        this.vaxter=data.vaxter;
        this.mulmar=data.mulmar;
        this.alla_vaxter = data.alla_vaxter;
        this.options = this.alla_vaxter;
        console.log(this.alla_vaxter)

        this.svg = document.getElementById('mysvg'),
        this.NS = this.svg.getAttribute('xmlns'),
        this.local = this.svg.getElementById('local'),
        this.coords = document.getElementById('coords');


        this.svg.addEventListener('mousemove', this.handleMouseMove);
        this.svg.addEventListener('click', this.handleMouseClick);

      });


  },

  template: `
    <div class="container" style = "display: flex; flex-direction: column; flex:1; justify-content: space-between;">

            <div>
              <h1 style="font-size:4vh; text-align:center; margin-bottom: 1em; margin-top: 1em;">Adminläge.</h1>
            </div>




            <div style = "margin-bottom: 2em; display: flex; flex-direction: row; justify-content: space-between;">
              <div  style = "width: 75%;">
                <div class="url" v-bind:style="{cursor: returnImgToken()}">
                  <svg id="mysvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  :viewBox=viewBox preserveAspectRatio="xMidYMid meet">
                  <image width="2111" height="1219" xlink:href="./assets/hogviltsgatan.png"></image>
                  <g v-if="this.rabattView == true">
                    <polygon v-for="rabatt in rabattlista" v-on:click="say(rabatt)" style="cursor: pointer;" :points="rabatt.polygon" fill="#006600">
                    <animate attributeType="CSS" attributeName="opacity"
                    values="0.2;1;0.2" dur="2s" repeatCount="indefinite" /></polygon>
                  </g>


                  <g id="local" transform="scale(4)" >

                  </g>

                  </svg>
                </div>
              </div>

              <div style= "width: 23%; ">

                <div v-if="this.rabattView != true && this.changed == false" >
                  <h1 style="font-size:3vh;"><label class="typo__label">Välj växt</label></h1>
                  <multiselect style="margin-bottom: 2em;" v-model="value" track-by="namn" label="namn" selectLabel="" placeholder="Växt" :options="options" :searchable="false" :allow-empty="false">
                    <template slot="singleLabel" slot-scope="{ option }">{{ option.namn}}</template>
                  </multiselect>

                  <div style="margin-bottom: 2em; min-height: 20vh;" v-if="this.addList.length > 0" >
                    <h1 style="font-size:3vh;">Tillagda växter.</h1>

                    <div  v-for="vaxt in addList">
                      {{vaxt.namn}}
                    </div>
                  </div>
                  <button v-if="this.addList.length > 0 && this.changed == false" v-on:click="postChanges('/api/changeRabatt')" type="submit" class="btn btn-success">Spara ändringar</button>
                </div>
                <div v-if="this.rabattView == true ">
                  <h1 style="font-size:3vh;"><label class="typo__label">Välj rabatt</label></h1>
                </div>

              </div>


            </div>

            <div v-if="this.value != null && this.changed == false" style = "display: flex; flex-direction: row; justify-content: space-between;">
              <div style = "width: 48%;">

              <h1 style="font-size:3vh;">Polygon.</h1>

              <img :src=this.returnImgToken() alt="Nature" class="responsive" style = "width: 50%;height: auto;">


              </div>

              <div v-if="this.value != null" style= "width: 48%; ">
              <h1 style="font-size:3vh;">Växtbild.</h1>

                <img :src=this.returnImg() alt="Nature" class="responsive" style = "width: 50%;height: auto;">
              </div>

            </div>

            <div v-if="this.rabattView == true" style=" text-align: center; margin-top: 1em; ">
              Tryck på en rabatt för att ändra den!
            </div>

            <div style="text-align: center; margin-bottom: 1em;" v-if="this.changed != false">
              <h4 style= "font-size: 2vh;">
              Ändringarna har sparats.
              <a style="color: blue; cursor: pointer;" v-on:click="go()">
              Tryck här för att gå till rabatten.
              </a>

              </h4>
            </div>


    </div>
	`
});

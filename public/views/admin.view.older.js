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
      rects: [
        { id:'id1', x:10, y:10, w:10, h:10 },
        { id:'id2', x:20, y:20, w:10, h:10 },
      ],
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
      poly: "154.36,107.16 160.92,113.97 160.92,123.0 160.92,131.6 154.94,138.23 148.0,142.53 135.57,150.25 120.33,152.16 106.0,152.0 93.92,151.85 76.36,147.49 67.0,139.67 55.63,130.16 54.86,117.25 66.02,107.18 69.06,104.44 72.33,102.54 76.0,100.78 83.89,97.02 91.48,95.71 100.0,94.42 114.7,92.63 134.13,95.38 147.0,102.88",
      polygonOrg:" 1025.36,684.16 1031.92,690.97 1031.92,700.0 1031.92,708.6 1025.94,715.23 1019.0,719.53 1006.57,727.25 991.33,729.16 977.0,729.0 964.92,728.85 947.36,724.49 938.0,716.67 926.63,707.16 925.86,694.25 937.02,684.18 940.06,681.44 943.33,679.54 947.0,677.78 954.89,674.02 962.48,672.71 971.0,671.42 985.7,669.63 1005.13,672.38 1018.0,679.88",
      addList: []
    }
  },
  methods: {
    redirect() {
			this.$router.push();
		},

    returnImg(){
      this.bild = "/assets/" + this.value.bildnamn;
      return this.bild;

    },

    returnImgToken(){
      this.polygonbild = "/assets/" + this.value.polygonbild;
      return this.polygonbild;

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
          console.log(a[0]);
          console.log(a[1]);
          aFix = parseFloat(a[0]) + parseFloat(x) +  (parseFloat(this.svgX) - parseFloat(x));
          bFix = parseFloat(a[1]) + parseFloat(y) +  (parseFloat(this.svgY) - parseFloat(y));
          // aFix = parseFloat(a[0]) + parseFloat(x) +  (parseFloat(this.svgX) - parseFloat(x)) -124-26 ;
          // bFix = parseFloat(a[1]) + parseFloat(y) +  (parseFloat(this.svgY) - parseFloat(y))-135-19;
          polygon+=" "+aFix.toString()+","+bFix.toString();
        }

      return polygon;
    },
    say: function (rabatt) {
      this.rabattView = false;
      this.rabatt=rabatt;
      this.viewBox = "" + this.rabatt.x + " " + this.rabatt.y + " " + this.rabatt.width + " " + this.rabatt.height;


      //this.$router.push(`/api/rabatt/${this.rabatt}`);
      //this.$router.push({name: 'rabatt', params: {rabatt: message.id}});
      //this.$router.push(`/rabatt/${this.rabatt.id}`);




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


    handleMouseMove(e) {

      if (this.rabattView == false){
        var
        x = e.clientX,
        y = e.clientY,

        svgP = this.svgPoint(this.svg, x, y),
        svgL = this.svgPoint(this.local, x, y);



        this.coords.textContent =
        '[page: ' + x + ',' + y +
        '] => [svg space: ' + Math.round(svgP.x) + ',' + Math.round(svgP.y) +
        '] [local transformed space: ' + Math.round(svgL.x) + ',' + Math.round(svgL.y) + ']'
        ;
      }



    },

    handleMouseClick(e) {
      if (this.rabatt == false){

        var
        t = e.target,
        x = e.clientX,
        y = e.clientY,

        target = (t == this.svg ? this.svg : t.parentNode),

        svgP = this.svgPoint(target, x, y);


        this.svgX = svgP.x;
        this.svgY = svgP.y;


        var poly= this.createPoly(this.NS);




        // this.rectlista.push(rect);
        target.appendChild(poly);

        vaxt=this.value;
        vaxt.polygon = poly;
        vaxt.rabatt_id = this.rabatt.id;
        vaxt.null = null;
        delete vaxt.polygonbild;
        console.log(vaxt.polygon);
        this.addList.push(vaxt);

      }

    }



  },


  created() {
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
        // this.svg.addEventListener('mousemove', function(e) {
        //
        //   var
        //     x = e.clientX,
        //     y = e.clientY,
        //
        //     svgP = this.svgPoint(this.svg, x, y),
        //     svgL = this.svgPoint(this.local, x, y);
        //
        //   // output co-ordinates
        //   this.coords.textContent =
        //     '[page: ' + x + ',' + y +
        //     '] => [svg space: ' + Math.round(svgP.x) + ',' + Math.round(svgP.y) +
        //     '] [local transformed space: ' + Math.round(svgL.x) + ',' + Math.round(svgL.y) + ']'
        //     ;
        //
        // }, false);

        // add a circle to the SVG
        // this.svg.addEventListener('click', function(e) {
        //
        //   var
        //     t = e.target,
        //     x = e.clientX,
        //     y = e.clientY,
        //     target = (t == this.svg ? this.svg : t.parentNode),
        //     svgP = svgPoint(target, x, y),
        //     rect = createRect(this.NS, svgP.x ,svgP.y, 50, 50);
        //
        //     target.appendChild(rect);
        //
        //     // circle = document.createElementNS(NS, 'circle');
        //     //
        //     // circle.setAttributeNS(null, 'cx', Math.round(svgP.x));
        //     // circle.setAttributeNS(null, 'cy', Math.round(svgP.y));
        //     // circle.setAttributeNS(null, 'r', 10);
        //     // target.appendChild(circle);
        //
        // }, false);

      });


  },

  //<rect v-for="rabatt in rabattlista" v-on:click="say(rabatt.width)" style="cursor: not-allowed;" :x="rabatt.x" :y="rabatt.y" fill="#fff" opacity="1" :width="rabatt.width" :height="rabatt.height"></rect>


  // <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2111 1219">
  //   <image width="2111" height="1219" xlink:href="./assets/hogviltsgatan.png"></image><a xlink:href="http://www.dn.se">
  //     <rect x="871" y="577" fill="#fff" opacity="1" width="386" height="218"></rect>
  //   </a>
  //     <rect x="336" y="656" fill="#fff" opacity="1" width="164" height="126"></rect>
  //
  //   <a v-for="msg in messages">
  //     <a v-on:click="say(msg)" style="cursor: not-allowed;">
  //       <rect x="1288" y="578" fill="#fff" opacity="1" width="473" height="216"></rect>
  //     </a>
  //   </a>
  //
  // </svg>

  // <a v-on:click="say('rabatt_1')" style="cursor: not-allowed;">
  //   <rect x="1288" y="578" fill="#fff" opacity="1" width="473" height="216"></rect>
  // </a>
// <img src="Högviltsgatan2_crop.png" usemap="#image-map">
//
// <map name="image-map">
//     <area target="" alt="hej" title="hej" href="google.com" coords="1757,783,1291,593" shape="rect">
// </map>
// <img src="./assets/hogviltsgatan2.png" style="width: 100%; height: auto;" alt="Responsive image" usemap="#image-map" />
// <map name="image-map">
//   <area style="border: 5px red solid;" target="" alt="hej" title="hej" href="google.com" coords="50,50,100,100" shape="rect"> viewBox="0 0 2111 1219">
// </map>

// <svg height="500" width="500">
//
//     <polygon :points="this.value.polygon" fill="#006600"></polygon>
//
// </svg>


  template: `
    <div class="container" style = "display: flex; flex-direction: column; flex:1; justify-content: space-between;">

            <div>
              <h1 style="font-size:3vh; text-align:center; margin-bottom: 2em; margin-top: 2em;">Adminläge.</h1>
            </div>




            <div style = "margin-bottom: 2em; display: flex; flex-direction: row; justify-content: space-between;">
              <div  style = "width: 75%;">
                <div class="url">
                  <svg id="mysvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  :viewBox=viewBox preserveAspectRatio="xMidYMid meet">
                  <image width="2111" height="1219" xlink:href="./assets/hogviltsgatan.png"></image>
                  <g v-if="this.rabattView == true">
                    <polygon v-for="rabatt in rabattlista" v-on:click="say(rabatt)" style="cursor: pointer;" :points="rabatt.polygon" fill="#006600">
                    <animate attributeType="CSS" attributeName="opacity"
                    values="0.2;1;0.2" dur="2s" repeatCount="indefinite" /></polygon>
                  </g>


                  <g id="local" transform="scale(4)">

                  </g>

                  </svg>
                </div>
              </div>

              <div  style= "width: 23%; ">

                <div>
                  <label class="typo__label">Välj växt</label>
                  <multiselect v-model="value" track-by="namn" label="namn" selectLabel="" placeholder="Växt" :options="options" :searchable="false" :allow-empty="false">
                    <template slot="singleLabel" slot-scope="{ option }">{{ option.namn}}</template>
                  </multiselect>

                </div>
                <div v-if="this.addList.length > 0" >
                  <div v-for="vaxt in addList" style="flex:1;">
                  {{vaxt.namn}}
                  </div>
                </div>
              </div>

            </div>
            <p id="coords">co-ordinates</p>
            <div v-if="this.value != null" style = "display: flex; flex-direction: row; justify-content: space-between;">
              <div style = "width: 48%;">

              <h1 style="font-size:3vh;">Polygon.</h1>

              <img :src=this.returnImgToken() alt="Nature" class="responsive" style = "width: 25%;height: auto;">


              </div>

              <div v-if="this.value != null" style= "width: 48%; ">
              <h1 style="font-size:3vh;">Växtbild.</h1>

                <img :src=this.returnImg() alt="Nature" class="responsive" style = "width: 50%;height: auto;">
              </div>

            </div>

            <div v-if="this.rabattView == true" style=" text-align: center; margin-top: 1em; ">
              Tryck på en rabatt för att ändra den!
            </div>






    </div>
	`
});

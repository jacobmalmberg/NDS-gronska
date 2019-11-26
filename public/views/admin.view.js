Vue.component('route-admin', {
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
      rabattView: true,
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]


    }
  },
  methods: {
    redirect() {
			this.$router.push();
		},

    hej(){
      console.log("hej");
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
      if (this.rabattView == false){

        var
        t = e.target,
        x = e.clientX,
        y = e.clientY,

        target = (t == this.svg ? this.svg : t.parentNode),

        svgP = this.svgPoint(target, x, y),
        rect = this.createRect(this.NS, svgP.x ,svgP.y, 50, 50);
        console.log(rect);
        // this.rectlista.push(rect);
        target.appendChild(rect);
        console.log(target);
        console.log(this.rectlista)
        this.rects.push({ id:'id'+this.i, x:svgP.x, y:svgP.y, w:10, h:10 });
        this.i++;
      }

    }



  },


  created() {
    this.$root.rabatt = undefined;
    this.$root.vaxt_id = undefined;
    this.$root.typ = undefined;




    fetch(`/api/forening`)
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        this.rabattlista = data.rabattlista;
        this.vaxter=data.vaxter;
        this.mulmar=this.mulmar;

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

  template: `
    <div class="container" style = "display: flex; flex-direction: column; flex:1; justify-content: space-between;">

            <div>
              <h1 style="font-size:3vh; text-align:center; margin-bottom: 2em; margin-top: 2em;">Adminläge.</h1>
            </div>




            <div style = "display: flex; flex-direction: row; justify-content: space-between;">
              <div :class=desktopRabatt style = "width: 75%;">
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
                  <g v-for="rect in rects" :id=rect.id>
                      <rect :x="rect.x" :y="rect.x" :width="rect.w" :height="rect.h" />
                  </g>
                  </svg>
                </div>
              </div>

              <div :class=desktopRabatt style= "width: 23%; ">
                <div class="form-group">
                  <label for="sel1">Select list:</label>
                  <select v-model="selected" class="form-control" id="sel1">
                    <option v-for="option in options" v-bind:value="option.value">
                      {{ option.text }}
                    </option>
                  </select>
                </div>
                <span>Selected: {{ selected }}</span>
                <div>
                <label class="typo__label">Single select</label>
                <multiselect v-model="selected" :options="options" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect>
                <pre class="language-json"><code>{{ selected  }}</code></pre>
                </div>
              </div>

            </div>
            <div v-if="this.rabattView == true" style=" text-align: center; margin-top: 1em; ">
              Tryck på en rabatt för att ändra den!
            </div>
            <p id="coords">co-ordinates</p>





    </div>
	`
});

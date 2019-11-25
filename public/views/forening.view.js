Vue.component('route-forening', {
  data() {
    return {
      rabattlista: null,
      rabatt: null,
      x: 1288,
      y: 578,
      mobileRabatt: 'mobileRabatt',
      desktopRabatt: 'desktopRabatt'

    }
  },
  methods: {
    redirect() {
			this.$router.push();
		},
    say: function (message) {
      this.rabatt=message;
      //this.$router.push(`/api/rabatt/${this.rabatt}`);
      //this.$router.push({name: 'rabatt', params: {rabatt: message.id}});
      //this.$router.push(`/rabatt/${this.rabatt.id}`);
      if (this.$root.rabatt != this.rabatt.id){
        this.$root.rabatt = this.rabatt.id;
        this.$root.vaxt_id = undefined;
        this.$root.typ = undefined;
      }


      this.$router.push({
        name: 'rabatt',
        params: {
          id: this.rabatt.id,
        },
      });
    }
  },
  created() {


    fetch(`/api/forening`)
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        this.rabattlista = data.rabattlista;
        this.vaxter=data.vaxter;
        this.mulmar=data.mulmar;

        console.log("map: ", google.maps)
        if (screen.width > 1281) {
  				this.map = new google.maps.Map(document.getElementById('myMap'), {
  					center: {lat:59.3557179, lng: 18.083744717},
  					zoom: 15
  				});
  				var uluru = {lat: 59.355909, lng: 18.085933};
  				var marker = new google.maps.Marker({position: uluru, map: this.map});

  			} else{
  				this.map = new google.maps.Map(document.getElementById('myMapMobile'), {
  					center: {lat:59.3557179, lng: 18.083744717},
  					zoom: 15
  				});
  				var uluru = {lat: 59.355909, lng: 18.085933};
  				var marker = new google.maps.Marker({position: uluru, map: this.map});
  			}
      })
    ;
    //ImageMap('img[usemap]');
    //imageMapResize();
    //resize();


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
              <h1 style="font-size:3vh; text-align:center; margin-bottom: 2em; margin-top: 2em;">Välkommen till Garphyttans innergård.</h1>
            </div>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2111 1219">
              <image width="2111" height="1219" xlink:href="./assets/hogviltsgatan.png"></image>
                <polygon v-for="rabatt in rabattlista" v-on:click="say(rabatt)" style="cursor: pointer;" :points="rabatt.polygon" fill="#006600">
                <animate attributeType="CSS" attributeName="opacity"
                values="0.2;1;0.2" dur="2s" repeatCount="indefinite" /></polygon>

            </svg>
            <div style=" text-align: center; margin-top: 1em; ">
        			Tryck på en rabatt för att få veta mer!
        		</div>

            <div :class=mobileRabatt style = "margin-top: 1em; ">
    							<div style="font-size:4vh;">Information</div>
                  På gården finns det {{this.vaxter}} växter och {{this.mulmar}} mulm.

    					<div :class=mobileRabatt style="height: 20vh;">
                <div style="font-size:4vh;">
                  Var ligger gården?
                </div>
                <div :class=mobileRabatt id="myMapMobile" style="height:200%; ">
                </div>
      				</div>
            </div>


              <div :class=desktopRabatt style = "margin-top: 1em; display: flex; flex-direction: row; justify-content: space-between;">

      					<div :class=desktopRabatt style = "width: 48%; text-align:justify;">
      							<h1 style="font-size:3vh;">Information</h1>
                    På gården finns det {{this.vaxter}} växter och {{this.mulmar}} mulm.
      					</div>
      					<div :class=desktopRabatt style= " display: flex; flex-direction: column; width: 48%;height:25vh; ">
                  <div :class=desktopRabatt style="font-size:3vh;">
                    <h1 style="font-size:3vh;">Var ligger gården</h1>
                  </div>
                  <div :class=desktopRabatt id="myMap" style="flex: 1;" >
                  </div>
        				</div>


      				</div>


    </div>
	`
});

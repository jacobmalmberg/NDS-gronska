Vue.component('route-foreningar', {
  data() {
    return {
      foreningar: null,

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


    fetch(`/api/foreningar`)
      .then(res => res.json())
      .then(data => {
        this.foreningar = data;

      });
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
          <h1 style="font-size:3vh; text-align:center; margin-bottom: 2em; margin-top: 1em;">Våra innergårdar.</h1>
        </div>
        <div  style="display: flex; flex-direction: row; flex-wrap: wrap; ">
          <div v-for="forening in foreningar">
          <div :style="{backgroundImage: 'url('+require('./assets/cars/'+forening.bildnamn)+')'}">
          </div>
            <img  style = "flex: 50%; max-width: 20vh;"  v-bind:src="'/assets/' + forening.bildnamn" alt="Nature" class="responsive" >

            </img>
            {{forening.namn}}

          </div>
        </div>



    </div>
	`
});

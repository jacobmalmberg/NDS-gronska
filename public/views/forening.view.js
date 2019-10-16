Vue.component('route-forening', {
  data() {
    return {
      messages:  ['hello'],
      rabattlista: null,
      rabatt: null,
      x: 1288,
      y: 578

    }
  },
  methods: {
    redirect() {
			this.$router.push();
		},
    say: function (message) {
      this.rabatt=message;
      console.log("rabattid"+ this.rabatt.id);
      //this.$router.push(`/api/rabatt/${this.rabatt}`);
      this.$router.push({name: 'rabatt', params: {rabatt: message.id}});
    }
  },
  created() {

    fetch(`/api/forening`)
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        this.rabattlista = data;
        this.time_slots = data.time_slots;
        console.log(this.rabattlista)
      })
    ;
    //ImageMap('img[usemap]');
    //imageMapResize();
    //resize();
    console.log("booking");


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
    <div class="container">
        <section class="col-md-10 col-md-offset-1">
            <div>

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2111 1219">
              <image width="2111" height="1219" xlink:href="./assets/hogviltsgatan.png"></image>
                <polygon v-for="rabatt in rabattlista" v-on:click="say(rabatt)" style="cursor: not-allowed;" :points="rabatt.polygon" fill="#fff" opacity="0.5"></polygon>

            </svg>

            </div>





        </section>
    </div>
	`
});

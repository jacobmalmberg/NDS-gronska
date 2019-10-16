Vue.component('route-booking_confirm', {
  data() {
    return {
      room: "bokningssida",
      assistant: this.$route.params.assistant,
      time_slot: this.$route.params.time,
      socket: null,
      name: '',
      start: '',
      end: '',
      timer: '',
      seconds: 20

    }
  },
  methods: {
    book() {
      this.socket.emit("booked", {room: this.room, id: this.time_slot, ass: this.assistant, name:this.name});
      this.$router.push(`/booking`);
      clearInterval(this.interval);

    },
    cancel(){
      this.socket.emit("canceled", {room: this.room, id: this.time_slot});
      this.$router.push(`/booking`);
      clearInterval(this.interval);
    },

    timerCount(start, end) {
      let now = new Date().getTime();
      // Find the distance between nolet distance = start - now;
      let passTime =  end - now;

      if(passTime < 0){
          console.log("expired");
          this.$router.push(`/booking`);

          clearInterval(this.interval);
          return;

      }else{
          this.calcTime(passTime);
      }
  },
  calcTime: function(dist){
    // Time calculations for days, hours, minutes and seconds
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
  }

  },
  created() {

    this.socket = io().connect();
    this.socket.emit("join", {name: this.room});
    this.socket.on('reserved', data => {
        console.log("reserved", data);
        console.log(this.assistants);
        this.assistants = data[0];
        this.time_slots = data[1];

    });
    // this.socket.on('join', data => {
    //     console.log("join", data);
    //     this.entries.push(data.username + " joined the channel");
    // });

    this.socket.on('join', data => {
    console.log("join", data);
    });

  },

  mounted() {

    this.start = new Date().getTime();
    this.end = this.start +20000;
    this.seconds = new Date((this.end-this.start)/1000).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start,this.end);
    this.interval = setInterval(() => {
        this.timerCount(this.start,this.end);
    }, 100);

  },

  template: `
    <div class="container">
    <div style="display: flex; justify-content:space-around">

      <div style="display: flex;">
        <div>
          <h3>{{assistant.name}}: {{time_slot.date}} - {{time_slot.time}}</h3>
          Name:
          <form v-on:submit.prevent="book()">
          <input style="width: 50%;" class="form-control" type="text" v-model="name" required autofocus placeholder="Your name">
          <input style="background: gold;" class="btn btn-default" type="submit" value="Confirm booking">
          <br>
          <input v-on:click="cancel()" style="background: grey; width: 50%;" class="btn btn-default"  value="Cancel">
          </form>
        </div>
      </div>

      <div style="display: flex;">
        <div>
          <h2 style= "border: 2px solid black; padding-left: 20px; padding-right:20px; background: deepskyblue;">
          {{seconds}}
          </h2>
        </div>
      </div>

    </div>
    </div>

	`,

  beforeRouteLeave (to, from, next) {
    this.socket.emit("canceled", {room: this.room, id: this.time_slot});
    clearInterval(this.interval);
    next();
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
}

});

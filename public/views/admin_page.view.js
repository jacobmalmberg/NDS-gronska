Vue.component('route-admin_page', {
	data() {
		return {
			room: "bokningssida",
			name: this.$route.params.name,
			time_slots: [],
			add_time: '',
			add_date: '',
			socket: null
		}
	},
	methods: {
		postData(url = ``, data = {}) {
		  // Default options are marked with *
		    return fetch(url, {
		        method: "POST", // *GET, POST, PUT, DELETE, etc.
		        headers: {
		            "Content-Type": "application/json",
		            // "Content-Type": "application/x-www-form-urlencoded",
		        },
		        body: JSON.stringify(data) // body data type must match "Content-Type" header
		    })
		    .then(response => response.json()); // parses response to JSON
		},

		remove(slot_id) {
			let params = {name: this.name, id:slot_id}
			console.log(JSON.parse(JSON.stringify(params)));
			this.postData(`/api/remove_time_slot`, params)
				.then(data => {
					this.time_slots = data.list;
					this.socket.emit("Upp", {room: this.room, assistant_name: this.name});
				});
		},

		add: function(date, time, event) {
			let params = {name: this.name, date: date, time:time}
			this.add_time = this.add_date='';
			this.postData(`/api/add_time_slot`, params)
				.then(data => {
					this.time_slots = data.list;
					this.socket.emit("Upp", {room: this.room, assistant_name: this.name});
					//event.target.reset();

				});
		}


	},
	created() {
		fetch(`/api/time_slots/${this.name}`)
			.then(res => res.json())
			.then(data => {
				this.time_slots=data.list;
				this.socket.emit("join", {name: this.room});
			})
			this.socket = io().connect();
			this.socket.on('Upp', data => {
			this.time_slots = data[0];
	});
},



	template: `
	<div style="display: flex; flex-direction: column;">
	<div>
	<h1 style= " text-align: center;">
	Admin {{ name }}
	</h1>
	</div>


	<div style="display: flex; justify-content: space-around;">

	<div style="display:flex; flex-direction: column; justify-content: center; flex-basis: 100%;">
		<div v-for="time in time_slots" style="align-self: center;" >
				<h5>
				{{ time.date }} - {{time.time}}
				<button v-on:click="remove(time.id)">Remove</button>
				<div v-if="time.booked_by != ''"> Booked by {{time.booked_by}}</div>
				</h5>
		</div>
	</div>



		<div style= "display: flex; justify-content: space-between;flex-basis: 100%;">
		<div style= "display: flex; flex-basis: 30%;">
		<h4>
		<label>Date (ie. 200912)</label>

		<label>Time (ie. 13:37)</label>
		</h4>
		</div>

		<div style= "display: flex; flex-basis: 100%;">
		<form v-on:submit.prevent="add(add_date, add_time)">
		<input style= "width: 100px; height: 30px; display: inline-block;" class="form-control" type="text" v-model="add_date" required autofocus>
		<br>
		<input style= "width: 100px; height: 30px; display: inline-block;" class="form-control" type="text" v-model="add_time" required autofocus><br>
		<input class="btn btn-default" type="submit" value="Add time">
		</form>
		</div>

		</div>



		</div>
	</div>

	`
});

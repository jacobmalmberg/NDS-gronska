Vue.component('route-list', {
	data() {
		return {
			rooms: []
		}
	},
	methods: {
		redirect(roomName) {
			this.$router.push(`/room/${roomName}`);
		}
	},
	created() {
		fetch('/api/roomList')
			.then(res => res.json())
			.then(data => {
				this.rooms = data.list;
			})
	},
	template: `
	<div class="container">
		<section class="col-md-10 col-md-offset-1">
			<div class="row" style="text-align: center;">
				<h1>Queues</h1>
			</div>

			<div class="row">
				<div class="well" v-for="room in rooms" v-on:click="redirect(room.name)">
					<div class="row" style="text-align: center;">
						<h4>
						<span>{{ room.name }}</span>
						</h4>
					</div>
				</div>
			</div>
		</section>
	</div>
	`
});

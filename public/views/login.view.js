Vue.component('route-login', {
	data() {
		return {
			name: ''
		}
	},
	methods: {
		done() {
			alert(`Hello ${this.name}!`);
			this.name = '';
		}
	},
	template: `
	<div class="text-box col-md-4 col-md-offset-4" style="text-align: center">
		<h1>What is your name?</h1>
		<form v-on:submit.prevent="done()">
			<input class="form-control" type="text" v-model="name" required autofocus>
			<input class="btn btn-default" type="submit" value="Ok">
		</form>
	</div>
	`
});

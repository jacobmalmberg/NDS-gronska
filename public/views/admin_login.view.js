Vue.component('route-admin_login', {
	data() {
		return {
			name: '',
			error_message: ''
		}
	},
	methods: {
		done() {
			fetch(`/api/admin_page/${this.name}`)
				.then(res => res.json())
				.then(data => {
					this.name=data.name;
					this.$router.push(data.url);
					if(data.error != undefined){
						//this.error_message = data.error;
						alert(data.error);
					}
					else{
						this.error_message = '';
					}
				})
		}
	},
	template: `
	<div class="text-box col-md-4 col-md-offset-4" style="text-align: center">
		<h1>Enter your admin name</h1>
		<form v-on:submit.prevent="done()">
			<input class="form-control" type="text" v-model="name" required autofocus>
			<input class="btn btn-default" type="submit" value="Ok">
		</form>
	</div>
	`
});

// <label v-model="error_message">{{error_message}}</label>

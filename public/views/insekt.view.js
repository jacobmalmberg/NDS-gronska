Vue.component('route-insekt', {
	data() {
		return {
			id: this.$route.params.id,
			bild: null,
			namn: null,
			intro: null,
			status: null,
			infoDiv: 'infoDiv',
			mobileRabatt: 'mobileRabatt',
			desktopRabatt: 'desktopRabatt'
		}
	},


	beforeMount() {
		//this.viewBox = "" + this.rabatt.x +" "+this.rabatt.y + " " +this.rabatt.width +
		// if (this.rabatt_in === undefined) {
		// 	this.$router.push({ name: 'forening' });
		// }

		fetch(`/api/insekter/${this.id}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				console.log(data[0].status);

				this.bild = data[0].bildnamn;
				this.namn = data[0].namn;
				this.intro = data[0].intro;
				this.status = data[0].status;
				console.log(this.status);

			})

	},

	template: `




	<div class="container" style = "display: flex; flex-direction: column; flex:1; justify-content: space-between;">


	<div :class=mobileRabatt>

		<div :class=mobileRabatt style="margin-top: 1em; margin-bottom: 1em;">
			<u><h1 style="font-size:3vh;">{{this.namn}}</h1></u>
		</div>

		<div :class=mobileRabatt style="margin-top: 1em; margin-bottom: 1em;">
				<img v-bind:src="'/assets/' + this.bild" alt="Nature" class="responsive" style = "width: 100%;height: auto;">

		</div>

		<div :class=mobileRabatt style="margin-top: 1em; margin-bottom: 1em;">
				{{this.intro}}
		</div>
		<div :class=mobileRabatt style="margin-top: 1em; margin-bottom: 1em;">
				Status: {{this.status}}
		</div>

	</div>


		<div :class=desktopRabatt>
				<div :class=desktopRabatt style = "margin-top: 3em; display: flex; flex-direction: row; justify-content: space-between;">

					<div :class=desktopRabatt style = "width: 48%;">
							<img v-bind:src="'/assets/' + this.bild" alt="Nature" class="responsive" style = "width: 100%;height: auto;">

					</div>

					<div :class=desktopRabatt style= "width: 48%; ">
							<u><h1 style="font-size:3vh;">{{this.namn}}</h1></u>
							<br>
							{{this.intro}}
						</div>

					</div>

				</div>



				<div :class=desktopRabatt style = "margin-top: 1em; display: flex; flex-direction: row; justify-content: space-between;">

					<div :class=desktopRabatt style = "width: 48%;">
							<h1 style="font-size:3vh;">Lång text här</h1>
					</div>

					<div :class=desktopRabatt style= "width: 48%; ">
						<h1 style="font-size:3vh;">Status</h1>
						{{this.status}}


					</div>

				</div>


		</div>


	</div>



	`
});

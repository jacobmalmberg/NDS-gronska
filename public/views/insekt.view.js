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
			desktopRabatt: 'desktopRabatt',
			myMap:'myMap'
		}
	},

	methods: {
    go() {
				this.$router.push({
					name: 'rabatt',
					params: {
						id: 1,
						vaxt: 2,
						typ:'vaxt'
					},
				});

    },
		rabatt() {
				this.$router.push({ name: 'forening' });
		}
  },


	mounted() {
		//this.viewBox = "" + this.rabatt.x +" "+this.rabatt.y + " " +this.rabatt.width +
		// if (this.rabatt_in === undefined) {
		// 	this.$router.push({ name: 'forening' });
		// }
		window.scrollTo(0, 0);

		fetch(`/api/insekter/${this.id}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				console.log(data[0].status);

				this.bild = data[0].bildnamn;
				this.namn = data[0].namn;
				this.intro = data[0].intro;
				this.status = data[0].status;
				this.text = data[0].text;
				console.log(this.text);

			})
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


			google.maps.event.addDomListener(marker, 'click', this.rabatt);

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
			<h1 style="font-size:3vh;">Status</h1>
			<p style="color: red">{{this.status}}</p>

		</div>
		<div :class=mobileRabatt style="margin-top: 1em; margin-bottom: 1em;">
			<h1 style="font-size:3vh;">Om insekten</h1>
			{{this.text}}
		</div>

		<div :class=mobileRabatt style="margin-top: 1em; margin-bottom: 0em;">

			<h1 style="font-size:3vh;">Var trivs insekten?</h1>
			Stortapetserarbi attraheras av stäppsalvia samt honungsblomma. I Norra Djurgårdsstaden finns stäppsalvia på Garphyttans innergård.
			<a style="color: blue; cursor: pointer;" v-on:click="go">Klicka här för att komma till rabatten som innehåller stäppsalvia.</a>
		</div>
		<div :class=mobileRabatt id="myMapMobile" style="margin-top: 1em; margin-bottom: 1em; height:50vh; ">
		</div>

	</div>


		<div :class=desktopRabatt>
				<div :class=desktopRabatt style = "margin-top: 3em; display: flex; flex-direction: row; justify-content: space-between;">

					<div :class=desktopRabatt  style = "width: 48%;">
							<img v-bind:src="'/assets/' + this.bild" alt="Nature" class="responsive" style = "width: 100%;height: auto;">

					</div>

					<div :class=desktopRabatt style= "width: 48%; text-align:justify; ">
							<u><h1 style="font-size:3vh;">{{this.namn}}</h1></u>
							<br>
							{{this.intro}}
						</div>

					</div>

				</div>



				<div :class=desktopRabatt style = "margin-top: 1em; display: flex; flex-direction: row; justify-content: space-between;">

					<div :class=desktopRabatt style = "width: 48%; text-align:justify;">
							<h1 style="font-size:3vh;">Om insekten</h1>
							{{this.text}}
					</div>

					<div :class=desktopRabatt style= "width: 48%; ">
						<h1 style="font-size:3vh;">Status</h1>
						<p style="color: red">{{this.status}}</p>

					</div>

				</div>

				<div :class=desktopRabatt style = "margin-top: 1em; display: flex; flex-direction: row; justify-content: space-between;">

					<div :class=desktopRabatt style = "width: 48%; text-align:justify;">
							<h1 style="font-size:3vh;">Var trivs insekten?</h1>
							Stortapetserarbi attraheras av stäppalvia samt honungsblomma. I Norra Djurgårdsstaden finns stäppsalvia på Garphyttans innergård.
							<a style="color: blue; cursor: pointer;" v-on:click="go">Klicka här för att komma till rabatten som innehåller stäppsalvia.</a>
					</div>
					<div :class=desktopRabatt id="myMap" style= " width: 48%;height:25vh; ">

					</div>


				</div>


		</div>


	</div>



	`
});

Vue.component('route-rabatt', {
	data() {
		return {
			rabatt_in: this.$route.params.rabatt,
			rabatt: null,
			viewBox:"0 0 2111 1000",
			viewBoxStor: "0 0 2111 1000",
			highlight: null,
			bild: null,
			vaxtlista: null,
			text: null,
			meddelande: null,
			subjectMall: "Feedback för er ",
			subject:null,
			from: null,
			sent: null,


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
		redirect() {
			this.$router.push();
		},

		say: function (message) {
			this.highlight=message;
			this.sent= null;
			this.from=null;
			this.text=null;
			console.log("HIGHTLIGHT"+ this.highlight.id);
			this.bild = "./assets/" + this.highlight.bildnamn
			//this.$router.push(`/api/rabatt/${this.rabatt}`);
		},

		done() {
			const self = this;
			this.meddelande = this.text +"\nAvsändare: " +this.from;
			this.subject = this.subjectMall + this.highlight.namn;
			const params = { text: this.meddelande, subject: this.subject};
			this.postData('/api/email', params)
				.then(() => {
					this.sent = "jacob";
					console.log(this.sent);
					// document.getElementById('feedback').style.display = 'none';
					// document.getElementById('tack').style.display = 'flex';
					// this.$router.push('/profile');
					console.log("skickat")
				}).catch(() => {
					// console.log(error);
					self.errorMessage = 'Incorrect credentials.';
				// console.log(this.errorMessage);
			});
	},

	},
	beforeMount() {
		//this.viewBox = "" + this.rabatt.x +" "+this.rabatt.y + " " +this.rabatt.width +

		fetch(`/api/rabatter/${this.rabatt_in}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				console.log(data.rabatt[0].width);
				this.rabatt= data.rabatt[0];
				this.vaxtlista = data.vaxter;
				console.log(this.rabatt)
				this.viewBox = "" + this.rabatt.x + " " + this.rabatt.y + " " + this.rabatt.width + " " + this.rabatt.height;


			})

	},


//<img :src="this.bild" alt="Nature" class="responsive" style = "width: 100%; height: auto;">

	template: `

	<div class="container" style = "display: flex; flex-direction: column; flex:1; justify-content: space-around;">

		<div>

			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :viewBox="this.viewBox">
				<image width="2111" height="1219" xlink:href="./assets/hogviltsgatan.png"></image>
					<polygon v-for="vaxt in vaxtlista" v-on:click="say(vaxt)" style="cursor: not-allowed;" :points="vaxt.polygon" fill="#00F" opacity="1"></polygon>
					<polygon v-if="this.highlight !== null" style="cursor: not-allowed;" :points="this.highlight.polygon" fill="#F00" opacity="1"></polygon>
			</svg>

		</div>

		<div v-if="this.rabatt !== null && this.highlight === null">
			Jorddjup: {{this.rabatt.jorddjup}} mm.
		</div>

		<div v-if="this.rabatt !== null && this.highlight === null">
			Ytskikt: {{this.rabatt.ytskikt}}.
		</div>

		<div v-if="this.highlight !== null">

			<h1 style="font-size:7vw;">{{this.highlight.namn}}</h1>
		</div>

		<div v-if="this.highlight !== null" style = "display: flex; flex-direction: row; justify-content: space-between;">

			<div style = "width: 48%;">
				<img :src="this.bild" alt="Nature" class="responsive" style = "width: 100%;height: auto;">
			</div>

			<div style= "width: 48%; ">
				{{this.highlight.intro}}
			</div>

		</div>

		<div v-if="this.highlight !== null" style = "display: flex; flex-direction: row; justify-content: space-between;">

			<div>
				<h1 style="font-size:6vw;">Skötselråd</h1>
				Vatten: {{this.highlight.vatten}}<br>
				Läge: {{this.highlight.lage}}<br>
				Höjd: {{this.highlight.hojd}}<br>
				Blommar: {{this.highlight.blommar}}<br>
				Näring: {{this.highlight.naring}}<br>
				Jordmån: {{this.highlight.jordman}}
			</div>
		</div>

		<div id="feedback" v-if="this.highlight !== null && this.sent === null">

			<div>
				<h1 style="font-size:6vw;">Ge feedback!</h1>
				Fyll i formuläret så skickas det till bostadsrättsföreningens grönansvariga. <br>
				<form v-on:submit.prevent="done()">
					<h1 style="font-size:5vw;">Meddelande</h1>
						<input class="form-control" type="text" v-model="text" required  placeholder="Feedback här">
					<h1 style="font-size:5vw;">Från</h1>
						<input class="form-control input-sm" type="email" v-model="from" required placeholder="Din email">
					<input class="btn btn-primary" type="submit" value="Skicka Feedback">
				</form>

			</div>
		</div>

		<div v-else-if="this.highlight !== null && this.sent !== null">
			<h1 style="font-size:6vw;">Tack för din feedback!</h1>
		</div>

	</div>

	`
});

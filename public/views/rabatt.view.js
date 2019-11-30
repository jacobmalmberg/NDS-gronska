Vue.component('route-rabatt', {
	data() {
		return {
			id: this.$route.params.id,
			rabatt: null,
			viewBox:"0 0 2111 1000",
			viewBoxStor: "0 0 2111 1000",
			highlight: this.$route.params.vaxt,
			bild: null,
			vaxtlista: null,
			mulmlista: null,
			text: null,
			meddelande: null,
			subjectMall: "Feedback för er ",
			subject:null,
			from: null,
			sent: null,
			typ: this.$route.params.typ,
			userimage: null,
			ekosystem: null,
			ndstext: "Att naturen sköter sig själv är en del av stadsdelens strategi för hållbarhet. Läs mer på ",
			ndslink: "http://www.norradjurgardsstaden2018.se/lat-naturen-gora-jobbet/",
			rabattext: null,
			attraherar: [],
			infoDiv: 'infoDiv',
			mobileRabatt: 'mobileRabatt',
			desktopRabatt: 'desktopRabatt',
			theBackBtn: 'theBackBtn',
			theBtn: 1

		}
	},
	methods: {
		onFileChange(e) {
			let files = event.target.files;
			if (files.length) this.userimage = files[0];

		},
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
		postImg(url = ``, formdata) {
			// Default options are marked with *
				return fetch(url, {
						method: "POST", // *GET, POST, PUT, DELETE, etc.
						//https://github.com/github/fetch/issues/505
						// headers: {
						// 		"Content-Type": "multipart/form-data",
						// 		// "Content-Type": "application/x-www-form-urlencoded",
						// },
						body: formdata // body data type must match "Content-Type" header
				})
				.then(response => response.json()); // parses response to JSON
		},
		redirect(path) {
			this.$router.push(path);
		},


		insekt: function (insekt_in) {
			this.$router.push(`/insekt/${insekt_in.id}`);

		},

		say: function (message, vaxt) {

			this.highlight=message;
			this.$root.vaxt_id = message.id;


			if (vaxt == 1){
				this.typ = "vaxt";
				this.$root.typ = "vaxt";

				fetch(`/api/attraherar/vaxt/${this.highlight.id}`)
					.then(res => res.json())
					.then(data => {
						console.log(data);
						this.attraherar = data;


				});
			} else{
				this.typ="mulm"
				this.$root.typ = "mulm";
				fetch(`/api/attraherar/mulm/${this.highlight.id}`)
					.then(res => res.json())
					.then(data => {
						console.log(data);
						this.attraherar = data;


				});
			}
			this.sent= null;
			this.from=null;
			this.text=null;
			//console.log("HIGHTLIGHT"+ this.highlight.id);
			this.bild = "/assets/" + this.highlight.bildnamn;
			//this.$router.push(`/api/rabatt/${this.rabatt}`);
			window.scrollTo(0, 0);

		},

		doneImg() {
			const self = this;
			this.meddelande = this.text +"\nAvsändare: " +this.from;
			if(this.typ == 'vaxt'){
				this.subject = this.subjectMall + this.highlight.namn.toLowerCase();
			} else {
				this.subject = this.subjectMall + 'mulm';
			}
			let fd = new FormData();
			fd.append('text', this.meddelande)
			fd.append('subject', this.subject)
			this.text="jacob";
			this.sent = "sent";

			//fd.append('text', `${this.text}`);
			if (this.userimage !== null){
				fd.append('img', this.userimage, 'bild.jpg');
			}
			this.userimage = null;

			//console.log(this.userimage);
			this.postImg('/api/emailImg', fd)
				.then(() => {
				}).catch(() => {
					// console.log(error);
					self.errorMessage = 'Incorrect credentials.';
				// console.log(this.errorMessage);
			});
		},

		backBtn() {
			this.theBtn += 2;

			this.$root.vaxt_id = undefined;
			this.$root.typ = undefined;
			if (this.highlight == undefined){
				//window.history.back();
				this.redirect('/forening/garphyttan');

			} else{

				this.highlight = undefined;
			}

		},


	},
	created() {

		let vaxt;

		this.id = this.$root.rabatt;
		this.highlight = this.$root.vaxt_id;
		this.typ = this.$root.typ;
		if (this.id === undefined) {
			this.$router.push({ name: 'forening' });
		}

		let url;
		if (this.typ != "mulm"){
			url = `/api/rabatter?rabatt=${this.id}&highlight=${this.highlight}`;
		} else{
			url = `/api/rabatter?rabatt=${this.id}&mulm=${this.highlight}`;
		}



		//const url = `/api/rabatter?rabatt=${this.id}&highlight=${this.highlight}`;
		fetch(url)
			.then(res => res.json())
			.then(data => {
				this.rabatt= data.rabatt[0];
				this.vaxtlista = data.vaxter;
				this.mulmlista = data.mulm;
				this.ekosystem = data.text;
				this.rabattext = this.ekosystem +this.ndstext;
				this.viewBox = "" + this.rabatt.x + " " + this.rabatt.y + " " + this.rabatt.width + " " + this.rabatt.height;
				if (this.highlight !== undefined) {
					console.log(data.vaxt[0]);
					this.highlight=data.vaxt[0];

					if(data.attraherar !== undefined){
						this.attraherar=data.attraherar;
					}

					this.sent= null;
					this.from=null;
					this.text=null;
					this.bild = "/assets/" + this.highlight.bildnamn;
				}

			});


	},


	template: `




	<div class="container" style = "display: flex; flex-direction: column; flex:1; justify-content: space-between;">

	<div style="margin-bottom:1em;" >
		<button type="button" class="theBackBtn btn btn-outline-secondary" v-on:click="backBtn()" :key="theBtn">
			<i class="fas fa-chevron-left"></i> Tillbaka
		</button>
	</div>

		<div :class=mobileRabatt>

			<div :class=mobileRabatt>
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :viewBox="this.viewBox">
					<image width="2111" height="1219" xlink:href="./assets/hogviltsgatan.png"></image>

					<polygon v-for="vaxt in vaxtlista" v-on:click="say(vaxt,1)" style="cursor: pointer;" :points="vaxt.polygon" fill="#006600">
						<animate attributeType="CSS" attributeName="opacity"
						values="0.2;1;0.2" dur="2s" repeatCount="indefinite" /></polygon>
						<polygon v-if="this.highlight !== undefined" style="cursor: not-allowed;" :points="this.highlight.polygon" fill="#F00" opacity="1"></polygon>
						<polygon v-for="mulm in mulmlista" v-on:click="say(mulm,0)" style="cursor: pointer;" :points="mulm.polygon" fill="#000000">
							<animate attributeType="CSS" attributeName="opacity"
							values="0.2;1;0.2" dur="2s" repeatCount="indefinite" /></polygon>
							<polygon v-if="this.highlight !== undefined" style="cursor: not-allowed;" :points="this.highlight.polygon" fill="#F00" opacity="1"></polygon>
				</svg>

			</div>

			<div :class=mobileRabatt v-if="this.rabatt !== null && this.highlight === undefined" style="margin-top: 1em; margin-bottom: 1em;">
				Tryck på en växt för att få veta mer!
			</div>

			<div :class=mobileRabatt v-if="this.rabatt !== null && this.highlight === undefined">
				<h1 style="font-size:3vh;">Om rabatten.</h1>
			</div>

			<div :class=mobileRabatt v-if="this.rabatt !== null && this.highlight === undefined">
				Jorddjup: {{this.rabatt.jorddjup}} mm.
			</div>

			<div :class=mobileRabatt style="margin-bottom:1em;" v-if="this.rabatt !== null && this.highlight === undefined">
				Ytskikt: {{this.rabatt.ytskikt}}.
			</div>

			<div :class=mobileRabatt v-if="this.rabatt !== null && this.highlight === undefined">
				<h1 style="font-size:3vh;">Växter i denna rabatt.</h1>
				<div :class=mobileRabatt style="margin-bottom:1em; display: flex; flex-wrap: wrap; flex-direction: column; justify-content: space-between; margin-bottom:1em;" v-if="this.rabatt !== null && this.highlight === undefined">
					<div :class=mobileRabatt v-for="vaxt in vaxtlista" v-on:click="say(vaxt,1)" style="flex:1; margin-bottom:1em;">
						<img v-bind:src="'/assets/' + vaxt.bildnamn" alt="Nature" class="responsive" style = "max-width: 100%; height: auto;">
						<br>
						<a style="color: blue; cursor: pointer;"> {{vaxt.namn}} </a>
					</div>
					<div :class=mobileRabatt v-for="mulm in mulmlista" v-on:click="say(mulm,2)" style="flex:1; margin-bottom:1em;">
						<img v-bind:src="'/assets/' + mulm.bildnamn" alt="Nature" class="responsive" style = "max-width: 100%; height: auto;">
						<br>
						<a style="color: blue; cursor: pointer;"> Mulm </a>
					</div>
				</div>
			</div>



			<div :class=mobileRabatt style="margin-top: 1em; margin-bottom: 1em;" v-if="this.highlight !== undefined">
				<div v-if="this.typ == 'vaxt'">
					<u><h1 style="font-size:3vh;">{{this.highlight.namn}}</h1></u>
				</div>
				<div v-else>
					<u><h1 style="font-size:3vh;">Mulm</h1></u>
				</div>
			</div>


			<div :class=mobileRabatt v-if="this.highlight !== undefined" style = "display: flex; flex-direction: row; justify-content: space-between; margin-bottom:1em;">
				<div :class=mobileRabatt style = "width: 48%;">
					<img :src="this.bild" alt="Nature" class="responsive" style = "width: 100%;height: auto;">
				</div>
				<div :class=mobileRabatt style= "width: 48%; ">

				<div :class=mobileRabatt>
				<div v-if="this.typ == 'vaxt'">
					<h1 style="font-size:3vh;">Skötselråd</h1>
					Vatten: {{this.highlight.vatten}}<br>
					Läge: {{this.highlight.lage}}<br>
					Höjd: {{this.highlight.hojd}}<br>
					Blommar: {{this.highlight.blommar}}<br>
					</div>
					<div v-else>
					<h1 style="font-size:3vh;">Skötselråd</h1>
						{{this.highlight.skotsel}}
					</div>
				</div>


				</div>
			</div>

			<div :class=mobileRabatt v-if="this.attraherar.length > 0" style = "margin-bottom:1em;" >
			<h1 style="font-size:3vh;">Attraherar</h1>
				<div  v-for="a in this.attraherar" v-on:click="insekt(a)" style="flex:1;">


					<a style="color: blue; cursor: pointer;">
					{{a.namn}} </a>
				</div>

			</div>

			<div :class=mobileRabatt v-if="this.highlight !== undefined" style = "margin-bottom:1em; ">
					<h1 v-if="this.typ == 'vaxt'" style="font-size:3vh;">Om växten.</h1>
					<h1 v-else style="font-size:3vh;">Om mulm</h1>
					{{this.highlight.intro}}
			</div>



			<div :class=mobileRabatt id="Ekosystem" v-if="this.rabatt !== null && this.highlight === undefined">
					<h1 style="font-size:3vh;">Rabattens ekosystem.</h1>
					{{this.rabattext}} <a v-bind:href=this.ndslink> {{this.ndslink}} </a>

			</div>

			<div :class=mobileRabatt id="feedback" v-if="this.highlight !== undefined && this.sent === null">

					<h1 style="font-size:3vh;">Ge feedback!</h1>
					Fyll i formuläret så skickas det till bostadsrättsföreningens grönansvariga. <p>
					<form v-on:submit.prevent="doneImg()">

					<div class="form-group">
						<label for="textbox">Meddelande</label>

						<textarea style="resize: none;" v-model="text" required class="form-control" rows="3" id="textbox" placeholder="Feedback här">
						</textarea>


					</div>
					<div class="form-group">
						<label for="email">Från</label>
						<input type="email" v-model="from" required class="form-control" id="email" placeholder="Din email">
					</div>

					<div class="form-group">
						<label for="bild">Lägg till bild om du vill.</label><br>
						<input type="file" name="bild" accept="image/" @change="onFileChange">
					</div>

						<button type="submit" class="btn btn-success">Skicka feedback</button>
					</form>


			</div>

			<div :class=mobileRabatt  v-else-if="this.highlight !== undefined && this.sent !== null">
				<h1 style="font-size:3vh;">Tack för din feedback!</h1>
			</div>

		</div>


		<div :class=desktopRabatt>
				<div :class=desktopRabatt style = "margin-top: 2em; display: flex; flex-direction: row; justify-content: space-between;">

					<div :class=desktopRabatt style = "width: 48%;">
						<div v-if="this.highlight !== undefined">
							<img :src="this.bild" alt="Nature" class="responsive" style = "width: 100%;height: auto;">
						</div>
						<div :class=desktopRabatt v-else>
							<div v-if="this.rabatt !== null && this.highlight === undefined">
							<h1 style="font-size:3vh;">Om rabatten.</h1>
								Jorddjup: {{this.rabatt.jorddjup}} mm.
							</div>

							<div style="margin-bottom:0.5em;" v-if="this.rabatt !== null && this.highlight === undefined">
								Ytskikt: {{this.rabatt.ytskikt}}.
							</div>

							<div>
								<h1 style="font-size:3vh;">Rabattens ekosystem.</h1>
								{{this.rabattext}} <a v-bind:href=this.ndslink> {{this.ndslink}} </a>
							</div>

						</div>
					</div>

					<div :class=desktopRabatt style= "width: 48%; ">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :viewBox="this.viewBox">
							<image width="2111" height="1219" xlink:href="./assets/hogviltsgatan.png"></image>
							<polygon v-for="vaxt in vaxtlista" v-on:click="say(vaxt,1)" style="cursor: pointer;" :points="vaxt.polygon" fill="#006600">
								<animate attributeType="CSS" attributeName="opacity"
								values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" /></polygon>
								<polygon v-if="this.highlight !== undefined" style="cursor: not-allowed;" :points="this.highlight.polygon" fill="#F00" opacity="1"></polygon>
								<polygon v-for="mulm in mulmlista" v-on:click="say(mulm,0)" style="cursor: pointer;" :points="mulm.polygon" fill="#000000">
									<animate attributeType="CSS" attributeName="opacity"
									values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" /></polygon>
									<polygon v-if="this.highlight !== undefined" style="cursor: not-allowed;" :points="this.highlight.polygon" fill="#F00" opacity="1"></polygon>
						</svg>

						<div :class=desktopRabatt v-if="this.highlight !== undefined">
							<br>
							<u><h1 v-if="this.typ == 'vaxt'" style="font-size:3vh;">{{this.highlight.namn}}</h1>
							<h1 v-else style="font-size:3vh;">Mulm</h1>
							</u>
							<br>
							{{this.highlight.intro}}
						</div>
						<div :class=desktopRabatt v-else>
							Tryck på en växt för att få veta mer!
						</div>

					</div>

				</div>

				<div :class=desktopRabatt v-if="this.rabatt !== null && this.highlight === undefined">
						<h1 style="font-size:3vh;">Växter i denna rabatt.</h1>

						<div :class=desktopRabatt style="margin-bottom:1em; display: flex; flex-wrap: wrap; justify-content: space-between;" v-if="this.rabatt !== null && this.highlight === undefined">
							<div v-for="vaxt in vaxtlista" v-on:click="say(vaxt,1)" style="flex:1;">
								<a style="color: blue; cursor: pointer;">
								<img v-bind:src="'/assets/' + vaxt.bildnamn" alt="Nature" class="responsive" style = "max-width: 75%;height: auto;">
								<br>
								{{vaxt.namn}} </a>
							</div>
							<div v-for="mulm in mulmlista" v-on:click="say(mulm,2)" style="flex:1;">
								<a style="color: blue; cursor: pointer;">
								<img v-bind:src="'/assets/' + mulm.bildnamn" alt="Nature" class="responsive" style = "max-width: 75%;height: auto;">
								<br>
								Mulm </a>
							</div>
						</div>

				</div>


				<div :class=desktopRabatt  v-if="this.highlight !== undefined" style = "margin-top: 1em; margin-bottom: 1em; display: flex; flex-direction: row; justify-content: space-between;">

					<div :class=desktopRabatt style = "width: 48%;">
						<div v-if="this.typ == 'vaxt'">
						<h1 style="font-size:3vh;">Skötselråd</h1>
							Vatten: {{this.highlight.vatten}}<br>
							Läge: {{this.highlight.lage}}<br>
							Höjd: {{this.highlight.hojd}}<br>
							Blommar: {{this.highlight.blommar}}<br>
							Näring: {{this.highlight.naring}}<br>
							Jordmån: {{this.highlight.jordman}}
						</div>
						<div v-else>
						<h1 style="font-size:3vh;">Skötselråd</h1>
						{{this.highlight.skotsel}}
						</div>
					</div>

					<div :class=desktopRabatt v-if="this.attraherar.length > 0" style= "width: 48%; ">
					<h1 style="font-size:3vh;">Attraherar</h1>
						<div v-for="a in this.attraherar" v-on:click="insekt(a)" style="flex:1;">
							<a style="color: blue; cursor: pointer;">
							{{a.namn}} </a>
						</div>

					</div>

				</div>



				<div :class=desktopRabatt id="feedback" v-if="this.highlight !== undefined && this.sent === null">

						<h1 style="font-size:3vh;">Ge feedback!</h1>
						Fyll i formuläret så skickas det till bostadsrättsföreningens grönansvariga. <p>
						<form v-on:submit.prevent="doneImg()">

						<div class="form-group">
							<label for="textbox">Meddelande</label>

							<textarea style="resize: none;" v-model="text" required class="form-control" rows="3"  id="textbox" placeholder="Feedback här">
							</textarea>


						</div>
						<div class="form-group">
							<label for="email">Från</label>
							<input type="email" v-model="from" cols="10" required class="form-control" id="email" placeholder="Din email">
						</div>

						<div class="form-group">
							<label for="bild">Lägg till bild om du vill.</label><br>
							<input type="file" name="bild" accept="image/" @change="onFileChange">
						</div>

							<button type="submit" class="btn btn-success">Skicka feedback</button>
						</form>


				</div>

				<div :class=desktopRabatt v-else-if="this.highlight !== undefined && this.sent !== null">
					<h1 style="font-size:3vh;">Tack för din feedback!</h1>
				</div>
		</div>


	</div>



	`

});

Vue.component('route-login', {

  data() {
    return {
      rabattlista: null,
      user: null,
      password: null,
      errorMessage: '',
      mobileRabatt: 'mobileRabatt',
      desktopRabatt: 'desktopRabatt'
    }
  },
  methods: {
    postData(url = '', data = {}) {
      // Default options are marked with *
      return fetch(url, {
		        method: 'POST', // *GET, POST, PUT, DELETE, etc.
		        headers: {
		            'Content-Type': 'application/json',
		            // "Content-Type": "application/x-www-form-urlencoded",
		        },
		        body: JSON.stringify(data), // body data type must match "Content-Type" header

		    })
        .then(this.handleErrors)
		    .then(response => response.json()); // parses response to JSON
    },

    done() {
      const self = this;
      const params = { username: this.user, password: this.password };
      this.postData('/api/login', params)
        .then(() => {
          document.getElementById('navbarIn').style.display = 'flex';
          let outList= document.getElementsByClassName('navbarOut');
          for (let i = 0; i <outList.length; i++){
            outList[i].style.display = 'none';
          }
          this.$router.push('/admin');
        }).catch(() => {
          this.user='';
          this.password='';
          self.errorMessage = 'Felaktig användare eller lösenord';
          // console.log(this.errorMessage);
        });
    },
    handleErrors(response) {
      // for RESTfulness, to check if we have an error
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    },
  },

  template: `
    <div class="container" style = "display: flex; flex-direction: column; flex:1; justify-content: space-between; align-items: center;">
      <h1 style="font-size: 4vh; margin-bottom: 1em;"> Logga in</h1>

      <div style="text-align: center; margin-bottom: 1em;" v-if="errorMessage != '' ">
        <h4 style= "font-size: 3vh; color: red;">{{errorMessage}}</h4>
      </div>
      <div :class=desktopRabatt style="width: 50%">


          <form v-on:submit.prevent="done()">
            <div class="form-group">
              <label for="user">Användarnamn</label>
              <input type="text" v-model="user" cols="10" required class="form-control" id="user" placeholder="Ditt användarnamn">
            </div>
            <div class="form-group col-xs-3">
              <label for="password">Lösenord</label>
              <input type="password" v-model="password" cols="10" required class="form-control" id="password" placeholder="Ditt lösenord">
            </div>
            <button type="submit" class="btn btn-success">Logga in</button>
          </form>
      </div>


      <div :class=mobileRabatt>


          <form v-on:submit.prevent="done()">
            <div class="form-group">
              <label for="user">Användarnamn</label>
              <input type="text" v-model="user" cols="10" required class="form-control" id="user" placeholder="Ditt användarnamn">
            </div>
            <div class="form-group col-xs-3">
              <label for="password">Lösenord</label>
              <input type="password" v-model="password" cols="10" required class="form-control" id="password" placeholder="Ditt lösenord">
            </div>
            <button type="submit" class="btn btn-success">Logga in</button>
          </form>
      </div>

    </div>
	`
});

Vue.component('route-omoss', {

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


  template: `
    <div class="container" style = "display: flex; flex-direction: column; flex:1; justify-content: space-between; align-items: center;">
      <h1 style="font-size: 4vh; margin-bottom: 1em; margin-top: 1em;"> Om oss</h1>

      <div :class=mobileRabatt  >

      <p>Vår projektgrupp består av fyra masterstudenter på Civilingenjörsprogrammet i Industriell Ekonomi på KTH.
        Det här projektet görs på uppdrag av Stockholms Stad och utgör en del av vårt sista år på utbildningen.
        Ni kan nå oss på adressen <a style="color: blue; cursor: pointer;" href="mailto:ndsgronska@hmail.com">ndsgronska@gmail.com</a>.
      </p>
      <img v-bind:src="'/assets/KTH_logotype.jpg'" alt="Nature" class="responsive" style = "width: 100%;height: auto;">
      </div>

      <div :class=desktopRabatt style = "margin-top: 2em; display: flex; flex-direction: row; justify-content: space-between;">

        <div :class=desktopRabatt  style = "width: 48%; text-align:justify;">

            <p>Vår projektgrupp består av fyra masterstudenter på Civilingenjörsprogrammet i Industriell Ekonomi på KTH.
              Det här projektet görs på uppdrag av Stockholms Stad och utgör en del av vårt sista år på utbildningen.
              Ni kan nå oss på adressen <a style="color: blue; cursor: pointer;" href="mailto:ndsgronska@hmail.com">ndsgronska@gmail.com</a>.
            </p>

        </div>

        <div :class=desktopRabatt style= "width: 48%; text-align:justify; ">
            <img v-bind:src="'/assets/KTH_logotype.jpg'" alt="Nature" class="responsive" style = "width: 100%;height: auto;">
        </div>

        </div>

      </div>


    </div>
	`
});

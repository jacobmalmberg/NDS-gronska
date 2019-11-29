Vue.component('route-syfte', {

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
      <h1 style="font-size: 4vh; margin-bottom: 1em; margin-top: 1em;"> Syfte</h1>

      <div :class=mobileRabatt  style = "text-align:justify;">

          <p>Under planeringen och byggandet av Norra Djurgårdsstaden
          har mycket fokus och eftertanke lagts på hållbarhet, däribland
          att innergårdarna ska präglas av mycket grönska och biologisk
           mångfald. Att ha en innergård med mycket grönska och växter
          bidrar inte bara till att skapa en fin och trevlig miljö att bo i, utan
          uppfyller också ett antal viktiga mer funktionella syften. Till att
          börja med är växtligheten viktig för er gårds dagvattenhantering.
          Växterna suger upp en stor andel av det regnvatten som faller
          och att hårdlägga marken på er innergård kan därför leda till
          stora problem med översvämningar, inte bara för er utan också
          för intilliggande bostäder.</p>

          <img v-bind:src="'/assets/syfte.jpg'" alt="Nature" class="responsive" style = "margin-bottom: 1em;width: 100%;height: auto;">

          <p>
          Vidare så bidrar variationen på växtlighet på innergårdarna till
          den biologiska mångfalden. I planeringen av gårdarna har man
          använt sig av ett verktyg kallat Grönytefaktor, som ställer krav
          på att man har en variation av insekts- och djurvänliga växter
          och installationer, samt att en viss procentsats av innergården
          måste vara särskilt ekologisk. Av den anledningen kan man på
          många innergårdar se saker som bihotell, fågelholkar och i
          vissa fall lådor med döda fåglar, som är nyttiga för vissa typer
          av insekter.</p>
          <br>
          Källa: Wikipedia
      </div>

      <div :class=desktopRabatt style = "margin-top: 2em; display: flex; flex-direction: row; justify-content: space-between;">

        <div :class=desktopRabatt  style = "width: 48%; text-align:justify;">

            <p>Under planeringen och byggandet av Norra Djurgårdsstaden
            har mycket fokus och eftertanke lagts på hållbarhet, däribland
            att innergårdarna ska präglas av mycket grönska och biologisk
             mångfald. Att ha en innergård med mycket grönska och växter
            bidrar inte bara till att skapa en fin och trevlig miljö att bo i, utan
            uppfyller också ett antal viktiga mer funktionella syften. Till att
            börja med är växtligheten viktig för er gårds dagvattenhantering.
            Växterna suger upp en stor andel av det regnvatten som faller
            och att hårdlägga marken på er innergård kan därför leda till
            stora problem med översvämningar, inte bara för er utan också
            för intilliggande bostäder.</p>

            <p>
            Vidare så bidrar variationen på växtlighet på innergårdarna till
            den biologiska mångfalden. I planeringen av gårdarna har man
            använt sig av ett verktyg kallat Grönytefaktor, som ställer krav
            på att man har en variation av insekts- och djurvänliga växter
            och installationer, samt att en viss procentsats av innergården
            måste vara särskilt ekologisk. Av den anledningen kan man på
            många innergårdar se saker som bihotell, fågelholkar och i
            vissa fall lådor med döda fåglar, som är nyttiga för vissa typer
            av insekter.</p>
            <br>
            Källa: Wikipedia
        </div>

        <div :class=desktopRabatt style= "width: 48%; text-align:justify; ">
            <img v-bind:src="'/assets/syfte.jpg'" alt="Nature" class="responsive" style = "width: 100%;height: auto;">
        </div>

        </div>

      </div>


    </div>
	`
});

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


          <p>
          Syftet med denna tjänst är att tillängliggöra information om växtligheten på
          innergårdarna i Norra Djurgårdsstaden. Under hösten 2019 har intervjuer med privatpersoner
          gjorts i stadsdelen för att ta reda på vad boende i området vill ha för information om
          växtligheten. Det visade sig att de boende ville ha information om vad som växer, varför
          dessa växter är viktiga, samspelet mellan växter och insekter, samt vilka växter som finns
          på gården. Om kunskapen om växtligheten ökar så ökar förhoppningsvis viljan att ta hand
          om den. Tjänsten fungerar väl i mobilen samt på en dator, vilket är viktigt eftersom alla
          i stadsdelen inte har smarta mobiler.
          </p>

          <img v-bind:src="'/assets/syfte.jpg'" alt="Nature" class="responsive" style = "margin-bottom: 1em;width: 100%;height: auto;">

          <p>Under planeringen och byggandet av Norra Djurgårdsstaden
          har mycket fokus och eftertanke lagts på hållbarhet, däribland
          att innergårdarna ska präglas av mycket grönska och biologisk
           mångfald. Att ha en innergård med mycket grönska och växter
          bidrar inte bara till att skapa en fin och trevlig miljö att bo i, utan
          uppfyller också ett antal viktiga mer funktionella syften. Växterna kyler av gården,
           skapar möjlighet för insekter att leva och må bra. Vidare suger växterna upp mycket
           vatten, och bidrar på så sätt till att förhindra översvämningar.
           </p>

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
      </div>

      <div :class=desktopRabatt style = "margin-top: 2em; display: flex; flex-direction: row; justify-content: space-between;">

        <div :class=desktopRabatt  style = "width: 48%; text-align:justify;">

            <p>
            Syftet med denna tjänst är att tillängliggöra information om växtligheten på
            innergårdarna i Norra Djurgårdsstaden. Under hösten 2019 har intervjuer med privatpersoner
            gjorts i stadsdelen för att ta reda på vad boende i området vill ha för information om
            växtligheten. Det visade sig att de boende ville ha information om vad som växer, varför
            dessa växter är viktiga, samspelet mellan växter och insekter, samt vilka växter som finns
            på gården. Om kunskapen om växtligheten ökar så ökar förhoppningsvis viljan att ta hand
            om den. Tjänsten fungerar väl i mobilen samt på en dator, vilket är viktigt eftersom alla
            i stadsdelen inte har smarta mobiler.
            </p>

            <p>Under planeringen och byggandet av Norra Djurgårdsstaden
            har mycket fokus och eftertanke lagts på hållbarhet, däribland
            att innergårdarna ska präglas av mycket grönska och biologisk
             mångfald. Att ha en innergård med mycket grönska och växter
            bidrar inte bara till att skapa en fin och trevlig miljö att bo i, utan
            uppfyller också ett antal viktiga mer funktionella syften. Växterna kyler av gården,
             skapar möjlighet för insekter att leva och må bra. Vidare suger växterna upp mycket
             vatten, och bidrar på så sätt till att förhindra översvämningar.</p>

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

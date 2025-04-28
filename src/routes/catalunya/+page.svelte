<script>
  import links from "$lib/catalunya/links";
</script>

<div class="title-wrapper">
  <h1>Sobre Catalunya</h1>
</div>

<div class="grid">
  <div class="box block">
    <h2>Explicació</h2>
    <img src="catalunya/flag.svg" alt="Catalunya" title="Catalunya">
    <p>
      Catalunya és una comunitat autònoma situada al nord-est de la península Ibèrica, a Espanya. Està composta per quatre províncies: Barcelona, Girona, Lleida i Tarragona. La seva capital és Barcelona, una ciutat coneguda per la seva arquitectura modernista, amb obres famoses com la Sagrada Família d'Antoni Gaudí.<br>
      Catalunya té una cultura i una llengua pròpies, el català, que és cooficial juntament amb el castellà. Aquesta regió té una llarga història i tradicions que es remunten a l'edat mitjana, i ha estat un important centre de comerç i cultura al llarg dels segles.<br>
      La gastronomia catalana també és molt rica i variada, amb plats típics com la escalivada, els calçots amb salsa romesco, i les postres com la crema catalana. A més, Catalunya és coneguda pels seus festivals tradicionals, com la Diada de Sant Jordi, la festa major de la Mercè i els castells (torres humanes).<br>
      L'economia catalana és una de les més potents d'Espanya, amb sectors destacats com el turisme, la indústria manufacturera i la tecnologia.
    </p>
  </div>

  <div class="box block">
    <h2>Col·lecció d'enllaços</h2>
    <div class="block">
      {#each links as link}
        <div class="flex">
          <div class="link-icon-wrapper">
            <img class="link-icon-img" src="icons/web.svg" alt={link.title} title={link.title} />
          </div>
          <a class="link-text" href={link.url} target="_blank">{link.title}</a>
        </div>
      {/each}
    </div>
  </div>

  <div class="box block">
    <h2>Disclaimer</h2>
    <p>
      Hem utilitzat <a href="https://translate.google.co.jp/?lfhs=2&sl=ja&tl=ca&op=translate" target="_blank">Google Translate</a> per crear aquesta pàgina.<br>
      En obrir <a href="/">OTONEKO.CAT</a>, vaig explicar aquesta pàgina en català.<br>
      Això compleix els requisits per adquirir un domini .CAT i es pot utilitzar per a la vostra pàgina d'inici.
    </p>
  </div>
</div>

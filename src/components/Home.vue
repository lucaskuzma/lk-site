<template>
  <div>
    <div>
      <p>Lucas Kuzma is a programmer and technical lead with over 25 years of experience designing and developing for <router-link to="/web">web</router-link> and <router-link to="/mobile">mobile</router-link>.</p>

      <p>
        <a title="Twitter" href="https://twitter.com/kuzmalucas"><img src="static/img/icon-twitter.svg"/></a>
        <a title="Instagram" href="https://instagram.com/lucaskuzma"><img src="static/img/icon-instagram.svg"/></a>
        <a title="GitHub" href="https://github.com/lucaskuzma"><img src="static/img/icon-github.svg"/></a>
        <a title="LinkedIn" href="https://www.linkedin.com/in/lucaskuzma/"><img src="static/img/icon-linkedin.svg"/></a>
        <a title="Resume" href="http://lucaskuzma.github.io/docs/cv/kuzma.html"><img src="static/img/icon-cv.svg"/></a>
      </p>

      <section v-if="!skills" v-on:click="skills = !skills"><p><a>[skills]</a></p></section>
      <section v-if="skills" v-on:click="skills = !skills"><p><a>[x]</a></p></section>
      <section v-if="skills">

      <p><strong>languages:</strong> Swift, Objective C, C++, Python, and JavaScript</p>
      <p><strong>frameworks:</strong> React, React Native, Vue, Angular, Three.js, Django, and Flask</p>
      <p><strong>platforms:</strong> iOS, AWS, GCP, Heroku, Docker, Arduino, and AVR</p>

      </section>

      <section v-if="!clients" v-on:click="clients = !clients"><p><a>[clients]</a></p></section>
      <section v-if="clients" v-on:click="clients = !clients"><p><a>[x]</a></p></section>
      <section v-if="clients">

      <p><strong>clients:</strong> including Absolut, Adidas, Adobe, Altoids, Balthaser Studios, Belief, Berkeley Systems, Chophouse Records, Cocoon, Covalent Networks, Devacurl, Discover Card, Disney, Dwell Magazine, eBay, Enlighten, Ernst &amp; Young, Hewlett Packard, House Party, IBM, Inktomi, Jambl, K-Swiss, Kid Brands, Listen Labs, Lundberg Design, Macromedia, Michele Saee, Muzik, Nabisco, Nickelodeon, New Mentor, Pfizer, Philtre Com Llc, Procter &amp; Gamble, Progressive Insurance, Prudential, Redken, Revlon, Royal Elastics, Sealy, Sonic Branding Solutions, Swoon Reads, Tempur-Pedic, Victoria&#8217;s Secret, and Yamaha</p>

      <p><strong>agencies:</strong> Goodby, Silverstein &amp; Partners, Huge, Sapient, TBWA\Chiat\Day, and theLab</p>
      </section>

      <section v-if="!background" v-on:click="background = !background"><p><a>[background]</a></p></section>
      <section v-if="background" v-on:click="background = !background"><p><a>[x]</a></p></section>
      <section v-if="background">

      <p>Numerous engagements in mobile, web, e-commerce, and dev ops in a lead capacity. Co-ran a couple small production agencies. Managed international remote teams. Interviewed and hired technical staff. Worked directly with clients. Fiendishly organized and committed to process. Graduate work in computer science, media art, audio analysis, synthesis, and visualization. Experienced as a <a title="An Interface for Sequencing with Concatenative Sound Synthesis" href="http://mtg.upf.edu/node/2190" target="_blank">researcher</a> and <a title="USC" href="https://cinema.usc.edu/directories/profile.cfm?id=33652" target="_blank">adjunct professor</a>. Passions include <a title="Verdant Systemt" href="http://verdant.systems">creative coding</a> and <a title="Claus Muzak" href="http://clausmuzak.com">music production</a>.</p>

      </section>

    </div>
  </div>
</template>

<script>
export default {
  props: ['section'],
  data: () => ({
    clients: false,
    skills: false,
    background: false
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

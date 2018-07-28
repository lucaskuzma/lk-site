<template>
  <div>

    <p>
      <router-link to="/">home</router-link>

      <router-link v-if="section != 'web'" to="/web">web</router-link>
      <span v-else>web</span>

      <router-link v-if="section != 'mobile'" to="/mobile">mobile</router-link>
      <span v-else>mobile</span>
    </p>

    <div v-if="projects && projects.length">
      <div class="project" v-for="project of filteredProjects(section)" :key="project.id">

        <p class="name title">{{ project.name }}<span class="agency title">Agency: {{ project.agency }}</span></p>

        <p class="details">{{ project.details }}</p>

        <ImageSet :device="project.device" :orientation="project.orientation" :images="project.images" />

      </div>
    </div>
  </div>
</template>

<script>
import ImageSet from './ImageSet.vue'

export default {
  props: ['section'],
  components: {
    'ImageSet': ImageSet
  },
  data: () => ({
    projects: [
      {
        'name': 'EZ Tax 101',
        'agency': 'The Strange Agency',
        'type': 'web',
        'device': 'browser',
        'details': 'Responsive site for tax startup. React front-end with Django back-end hosted on Heroku. Numerous integrations, including Twilio, Amazon SES, and Amazon S3. Responsible for all architecture, dev-ops, application programming, and design direction.',
        'images': [
          'tax-1.jpeg',
          'tax-2.jpeg',
          'tax-3.jpeg'
        ],
        'image': ''
      },
      {
        'name': 'Cocoon',
        'agency': 'theLab',
        'type': 'web',
        'device': 'browser',
        'details': 'Promotional site with built-in configuration and commerce for Cocoon by Sealy. Containerized Django and Oscar back-end with Backbone front-end. Handled front- and back-end ongoing programming tasks and maintenance.',
        'images': [
          'cocoon-1.jpeg',
          'cocoon-2.jpeg',
          'cocoon-3.jpeg'
        ],
        'image': ''
      },
      {
        'name': 'K-Swiss',
        'agency': 'The Strange Agency',
        'type': 'web',
        'device': 'browser',
        'details': 'International apparel store. Magento back-end with a custom Kohana front-end. Hosted on AWS in the US and Europe. Handled all architecture, dev-ops, ERP integrations, application programming, and maintenance. Managed a team of 4 developers and a designer.',
        'images': [
          'kswiss-1.jpeg',
          'kswiss-2.jpeg',
          'kswiss-3.jpeg'
        ],
        'image': ''
      },
      {
        'name': 'Kidbrands',
        'agency': 'theLab',
        'type': 'web',
        'device': 'browser',
        'details': 'Four retail stores and a B2B corporate site for the Kidbrands group of children’s product companies. Magento back-end with a custom Flask front-end and a Mezzanine CMS. Hosted on AWS. Lead architect and engineer for all dev-ops, integrations, application programming, and maintenance.',
        'images': [
          'kb-cocalo.jpeg',
          'kb-kidsline.jpeg',
          'kb-lajobi.jpeg',
          'kb-sassy.jpeg'
        ],
        'image': ''
      },
      {
        'name': 'Palladium Boots',
        'agency': 'The Strange Agency',
        'type': 'web',
        'device': 'browser',
        'details': 'International Magento store with an integrated Drupal CMS. Hosted on AWS in the US and Europe. Handled all dev-ops, ERP integrations, application programming, and maintenance.',
        'images': [
          'pb-1.jpeg',
          'pb-2.jpeg',
          'pb-3.jpeg'
        ],
        'image': ''
      },
      {
        'name': 'Swoon Reads',
        'agency': 'theLab',
        'type': 'web',
        'device': 'browser',
        'details': 'Community web site for young authors. Containerized Django back-end with React front-end and Wagtail CMS. Handled front- and back-end ongoing programming tasks and maintenance.',
        'images': [
          'swoon-1.jpeg',
          'swoon-2.jpeg',
          'swoon-3.jpeg'
        ],
        'image': ''
      },
      {
        'name': 'Soup',
        'agency': 'The Strange Agency',
        'type': 'mobile',
        'device': 'tablet',
        'orientation': 'landscape',
        'details': 'Inspired by the oil can delays of the 60s, Soup brings you a virtual fluid that you can record onto, slosh around, and play back from. You can use it as a unique delay effect or more like a granular synthesizer, concocting your own wholly novel sounds.',
        'images': [
          'soup_1.jpg',
          'soup_2.jpg',
          'soup_3.jpg'
        ],
        'width': 1024,
        'height': 771,
        'image': ''
      },
      {
        'name': 'Victoria’s Secret Guide',
        'agency': 'theLab',
        'type': 'mobile',
        'device': 'tablet',
        'orientation': 'landscape',
        'details': 'Internal merchandising tool facilitating communication between brand managers, district managers, and store employees. Utilizes custom schemaless local storage for brand content, provides employees a floor layout sketch tool, a photo management tool, and inter-user communications.',
        'images': [
          'vs_a.jpg',
          'vs_b.jpg',
          'vs_c.jpg',
          'vs_d.jpg',
          'vs_e.jpg'
        ],
        'image': ''
      },
      {
        'name': 'True Zero Station Finder',
        'agency': 'theLab',
        'type': 'mobile',
        'device': 'phone',
        'orientation': 'portrait',
        'details': 'Mapping and navigation tool allowing users to find and navigate to nearby hydrogen fueling stations. Utilizes a custom station API along with Apple and Google mapping APIs. Relies on React Native to be fully cross-platform.',
        'images': [
          'tz_a.jpg',
          'tz_b.jpg',
          'tz_c.jpg',
          'tz_d.jpg',
          'tz_e.jpg'
        ],
        'image': ''
      },
      {
        'name': 'Disney Magic Mirror',
        'agency': 'Sapient',
        'type': 'mobile',
        'device': 'tablet',
        'orientation': 'portrait',
        'details': 'Disney iPad app with real-time lip-sync. Dialog audio files were broken down into their constituent phonemes, and these were used to automatically control the mask animation. Utilizes custom OpenGL mesh morphing system. Because the morphing is rendered on the fly, the mask can be animated in response to user touches, even while speaking.',
        'images': [
          'dis_a.jpg',
          'dis_b.jpg'
        ],
        'image': ''
      },
      {
        'name': 'Bite Me',
        'agency': 'The Strange Agency',
        'type': 'mobile',
        'device': 'tablet',
        'orientation': 'portrait',
        'details': 'Native finger twister game for iPad. Hold a finger on each hungry Blob as it appears until it has fed enough and disappears happily. Let go too soon and the Blob will die. Fully custom Quartz programming.',
        'images': [
          'bite-me-1.jpg',
          'bite-me-2.jpg',
          'bite-me-3.jpg',
          'bite-me-4.jpg',
          'bite-me-5.jpg'
        ],
        'image': ''
      },
      {
        'name': 'HyperSpace',
        'agency': 'The Strange Agency',
        'type': 'mobile',
        'device': 'phone',
        'orientation': 'portrait',
        'details': 'HyperSpace uses a unique algorithm to generate endless mesmerizing images from sound. It works similarly to a harmonograph, but uses its 3 voice oscillators to create images. Uses OpenGL and custom audio programming.',
        'images': [
          'hyperspace_a.jpg',
          'hyperspace_b.jpg',
          'hyperspace_c.jpg',
          'hyperspace_d.jpg',
          'hyperspace_e.jpg'
        ],
        'image': ''
      },
      {
        'name': 'Muzik Listening',
        'agency': 'Huge',
        'type': 'mobile',
        'device': 'phone',
        'orientation': 'portrait',
        'details': 'A group listening application to help showcase Muzik connected headphones. Any app user can DJ using a Spotify playlist, and others can join the stream as it plays. The app is native Swift with some C audio analysis for the interactive sound visualizer component. It relies on the Spotify SDK as well as PubNub and Branch.',
        'images': [
          'listen_a.jpg',
          'listen_b.jpg',
          'listen_c.jpg',
          'listen_d.jpg',
          'listen_e.jpg'
        ],
        'image': ''
      },
      {
        'name': 'Interactive Cinema',
        'agency': 'The Strange Agency',
        'type': 'mobile',
        'device': 'tablet',
        'orientation': 'portrait',
        'details': 'Prototype iPad app for an interactive video system. The viewer’s gaze is used to control a branching video narrative. Relies on the Visage eye tracking SDK. Interactively controls video playback.',
        'images': [
          'telepathic-a.jpg',
          'telepathic-b.jpg'
        ],
        'image': ''
      },
      {
        'name': 'Donut',
        'agency': 'The Strange Agency',
        'type': 'mobile',
        'device': 'tablet',
        'orientation': 'portrait',
        'details': 'Donut lets you record loops in two dimensions. You can use it like a phrase looper, by recording horizontally while using the step controls to step through vertical recording position. You can record and playback at completely differently speeds. You can even record backwards! You can record and playback diagonally across the Donut surface, creating glitchy staccato sounds. You can record and playback with multiple heads, recording or playing multiple positions at once.',
        'images': [
          'donut_1.jpg',
          'donut_2.jpg'
        ],
        'image': ''
      },
      {
        'name': 'CP-1919',
        'agency': 'The Strange Agency',
        'type': 'mobile',
        'device': 'tablet',
        'orientation': 'landscape',
        'details': 'A physics-based fluid simulation drives an additive synthesizer, controlling a fat stack of up to 24 oscillators. The multitouch interface lets you control the fluid with your fingers, exciting the oscillators like strings on a liquid harp. ',
        'images': [
          'cp1919_a.jpg',
          'cp1919_b.jpg'
        ],
        'image': ''
      }
    ]
  }),
  methods: {
    filteredProjects: function (section) {
      return this.$data.projects.filter(function (p) {
        return p.type === section
      })
    }
  }
}
</script>

<style scoped>

.project {
  padding-top: 24px;
}

.agency {
  float: right;
}

.details {
  text-align:justify;
}
</style>

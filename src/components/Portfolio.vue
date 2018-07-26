<template>
  <div>

    <p><router-link class="" to="/">home</router-link> web iOS</p>

    <div v-if="projects && projects.length">
      <div class="project" v-for="project of projects" :key="project.id">
        <p>
          <p class="name title">{{ project.name }}
          <span class="agency title">Agency: {{ project.agency }}</span></p>
          <p class="details">{{ project.details }}</p>

          <!--<div v-if="project.images && project.images.length">-->
            <!--<div v-for="image of project.images" :key="image.id">-->
              <!--<img class="web-image" :src="'static/img/' + image" />{{image}}-->
            <!--</div>-->
          <!--</div>-->

          <img class="web-image" :src="'static/img/' + project.image" v-on:click="next(project)"/>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        'name': 'EZ Tax 101',
        'agency': 'The Strange Agency',
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
        'details': 'Community web site for young authors. Containerized Django back-end with React front-end and Wagtail CMS. Handled front- and back-end ongoing programming tasks and maintenance.',
        'images': [
          'swoon-1.jpeg',
          'swoon-2.jpeg',
          'swoon-3.jpeg'
        ],
        'image': ''
      }
    ]
  }),
  created () {
    let self = this

    for (let project of self.$data.projects) {
      if (project.images) {
        project.image = project.images[0]
        project.index = 0
      }
    }

    this.setTimer()
  },
  beforeDestroy () {
    let self = this
    clearInterval(self.interval)
  },
  methods: {
    next: function (project, event) {
      project.index = project.index === project.images.length - 1 ? 0 : project.index + 1
      project.image = project.images[project.index]
      this.setTimer()
    },
    setTimer: function () {
      let self = this
      clearInterval(self.interval)
      self.interval = setInterval(function () {
        self.cycleImages()
      }, 15000)
    },
    cycleImages: function () {
      for (let project of this.$data.projects) {
        if (project.images) {
          project.index = project.index === project.images.length - 1 ? 0 : project.index + 1
          project.image = project.images[project.index]
        }
      }
    }
  }

}
</script>

<style scoped>

.project {
  padding-top: 24px;
}

.web-image {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.agency {
  float: right;
  padding-right: 24px;
}

.details {
  padding-right: 24px;
  text-align:justify;
}
</style>

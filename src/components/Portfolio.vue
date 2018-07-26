<template>
  <div>

    <p><router-link class="" to="/">home</router-link> web iOS</p>

    <div v-if="projects && projects.length">
      <div v-for="project of projects" :key="project.id">
        <p>
          <p class="name title">{{ project.name }}
          <span class="agency title">Agency: {{ project.agency }}</span></p>
          <p class="details">{{ project.details }}</p>

          <!--<div v-if="project.images && project.images.length">-->
            <!--<div v-for="image of project.images" :key="image.id">-->
              <!--<img class="web-image" :src="'static/img/' + image" />{{image}}-->
            <!--</div>-->
          <!--</div>-->

          <img class="web-image" :src="'static/img/' + project.image" v-on:click="next(project)"/>{{project.image}}

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        'name': 'Cocoon',
        'agency': 'theLab',
        'details': 'Promotional site with built-in configuration and commerce for Cocoon by Sealy. Containerized Django and Oscar back-end with Backbone front-end. Handled front- and back-end ongoing programming tasks and maintenance.',
        'images': [
          'cocoon-1.jpeg',
          'cocoon-2.jpeg'
        ],
        'image': ''
      },
      {
        'name': 'K-Swiss',
        'agency': 'The Strange Agency',
        'details': 'International apparel store. Magento back-end with a custom Kohana front-end. Hosted on AWS in the US and Europe. Handled all architecture, dev-ops, ERP integrations, application programming, and maintenance. Managed a team of 4 developers and a designer.'
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

    self.interval = setInterval(function () {
      for (let project of self.$data.projects) {
        if (project.images) {
          project.index = project.index === project.images.length - 1 ? 0 : project.index + 1
          project.image = project.images[project.index]
        }
      }
    }, 5000)
  },
  beforeDestroy () {
    let self = this
    clearInterval(self.interval)
  },
  methods: {
    next: function (project, event) {
      project.index = project.index === project.images.length - 1 ? 0 : project.index + 1
      project.image = project.images[project.index]
    }
  }

}
</script>

<style scoped>

.web-image {
  height: 200px;
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

<template>
  <div>
    <router-link class="" to="/">
      home
    </router-link>
    <div v-if="projects && projects.length">
      <div v-for="project of projects" :key="project.id">
        <div>
          <p class="name">{{ project.name }}</p>
          <p class="agency">{{ project.agency }}</p>
          <p class="details">{{ project.details }}</p>

          <div v-if="project.images && project.images.length">
            <div v-for="image of project.images" :key="image.id">
              <img class="web-image" :src="'static/img/' + image" />{{image}}
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: () => ({
    projects: [
      {
        'name': 'Cocoon',
        'agency': 'theLab',
        'details': 'Promotional site with built-in configuration and commerce for Cocoon by Sealy. Containerized Django and Oscar back-end with Backbone front-end. Handled front- and back-end ongoing programming tasks and maintenance.',
        'images': [
          'cocoon-1.jpeg',
          'cocoon-2.jpeg'
        ]
      },
      {
        'name': 'K-Swiss',
        'agency': 'The Strange Agency',
        'details': 'International apparel store. Magento back-end with a custom Kohana front-end. Hosted on AWS in the US and Europe. Handled all architecture, dev-ops, ERP integrations, application programming, and maintenance. Managed a team of 4 developers and a designer.'
      }
    ]
  })
}
</script>

<style scoped>

.web-image {
  height: 200px;
}

</style>

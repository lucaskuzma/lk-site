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
      <div class="project" v-for="project of projects" :key="project.id">

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
  props: ['section', 'projects'],
  components: {
    'ImageSet': ImageSet
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

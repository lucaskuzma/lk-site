<template>
  <div class="image">
    <!-- <img :class="'image ' + project.device + '-' + project.orientation" :src="'static/img/' + project.image" v-on:click="next(project)"/> -->
    <img :src="'static/img/' + image" v-on:click="next()"/>
  </div>
</template>

<script>
export default {
  props: ['images'],
  data: () => ({
    image: undefined
  }),
  created () {
    let self = this
    self.index = 0
    self.image = this.$props.images[self.index]
    this.setTimer()
  },
  beforeDestroy () {
    let self = this
    clearInterval(self.interval)
  },
  computed: {
  },
  methods: {
    next: function (event) {
      this.cycleImages()
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
      this.index = this.index === this.$props.images.length - 1 ? 0 : this.index + 1
      this.image = this.$props.images[this.index]
    }
  }
}
</script>

<style>
.image {
  margin-left: auto;
  margin-right: auto;
  display: block;
  cursor: pointer;
}
</style>

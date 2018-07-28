<template>
  <img :class="'image ' + device + '-' + orientation" :src="'static/img/' + image" v-on:click="next()"/>
</template>

<script>
export default {
  props: ['images', 'device', 'orientation'],
  data: () => ({
    image: undefined,
    index: 0
  }),
  created () {
    let self = this
    self.index = 0
    self.image = this.$props.images[self.index]
    this.setTimer()
  },
  updated () {
    let self = this
    self.image = this.$props.images[self.index]
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

.browser-undefined {
  width: 80%;
}

.tablet-landscape {
  width: 80%;
}

.tablet-portrait {
  width: 70%;
}

.phone-portrait {
  width: 40%;
}
</style>

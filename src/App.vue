<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Josefin', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

p {
    font-family: 'Josefin Slab', serif;
    font-size: 32px;
    line-height: 48px;
    padding-left: 24px;
}

a {
    color: #08c;
    text-decoration: none;
}
</style>

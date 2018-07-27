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
  color: #000;
}

p {
  font-family: 'Josefin Slab', serif;
  font-size: 28px;
  line-height: 42px;
  padding-left: 5%;
  padding-right: 5%;
}

a {
  color: #08c;
  text-decoration: none;
  cursor: pointer;
}

.title {
  font-family: 'Josefin Sans', sans-serif;
}
</style>

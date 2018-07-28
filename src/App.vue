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

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/** Mobile **/
@media only screen and (max-width: 767px), only screen and (max-device-width: 767px) {

  p {
    font-size: 18px;
    line-height: 24px;
  }

  .App-outputArea {
    display: none;
  }

}

</style>

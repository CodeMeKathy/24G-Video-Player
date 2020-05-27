<template>
  <div id="app">
    <Navbar name="Kathy" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
// Import Custom Fonts
@import url('../src/css/fonts/stylesheet.css');
#app {
  height: 100vh;
}
</style>

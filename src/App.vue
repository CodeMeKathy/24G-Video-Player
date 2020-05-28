<template>
  <div id="app">
    <Navbar name="Kathy" />
    <SectionBanner name="Video Player" />
  </div>
</template>

<script>
// Import BootstrapVue
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'

// Import Custom Components
import Navbar from './components/Navbar.vue'
import SectionBanner from './components/SectionBanner.vue'

Vue.use(BootstrapVue)

export default {
  name: 'App',
  components: {
    Navbar,
    SectionBanner
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

<template>
  <div class="navbar">
    <h1 class="navbar-title">
      <!-- Name is hardcoded in App.vue and passed down as a prop -->
      Welcome, <span class="navbar-title-name">{{ name }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    name: String
  }
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  height: 2rem;
  background-color: #009ddb;
  &-title {
    font-family: 'brandon_grotesquelight' !important;
    font-size: 1.2rem;
    color: #ffffffa8;
    font-weight: 100;
    align-self: center;
    padding-left: 1rem;
    margin-block-end: 0;

    &-name {
      font-family: 'brandon_grotesquemedium';
      color: #ffffff;
    }
  }
}
</style>

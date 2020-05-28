<template>
  <div class="navbar">
    <h1 class="navbar-title">
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
    padding-left: 2.5rem;
    margin-block-end: 0;

    &-name {
      font-family: 'brandon_grotesquemedium';
      color: #ffffff;
    }
  }
}

//! Media Queries

/* Mobile Phones */
@media (max-width: 767px) and (min-width: 320px) {
  .navbar {
    height: 5.5rem;
    &-title {
      padding-left: 0.5rem;
    }
  }
}
</style>

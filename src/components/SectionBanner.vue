<template>
  <div class="section-banner">
    <img
      src="../../src/assets/24g_logo.svg"
      alt="24G Logo"
      class="section-banner-logo"
    />
    <span class="section-banner-title">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'SectionBanner',
  props: {
    name: String
  }
}
</script>

<style scoped lang="scss">
.section-banner {
  display: flex;
  background-color: #393c3e;
  height: 4.8rem;
  padding-left: 3.5rem;
  &-logo {
    align-self: center;
    height: 2.5rem;
  }
  &-title {
    align-self: center;
    text-transform: uppercase;
    color: #ffffff;
    padding-left: 1.4rem;
    font-size: 1.25rem;
  }
}

//! Media Queries

/* Mobile Phones */
@media (max-width: 425px) and (min-width: 320px) {
  .section-banner {
    height: 10rem;
    flex-direction: column;
    place-content: center;
    padding: 0;
    margin: 0;
    &-logo {
      margin: 1rem 0 0 0;
    }
    &-title {
      padding: 0.5rem 0 0 0;
      margin: 0;
      letter-spacing: 3.5px;
    }
  }
}
</style>

<template>
  <div class="section-banner">
    <img src="../../src/assets/24g_logo.svg" alt="24G Logo" class="section-banner-logo" />
    <span class="section-banner-title">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "SectionBanner",
  props: {
    name: String
  }
};
</script>

<style scoped lang="scss">
.section-banner {
  display: flex;
  background-color: #393c3e;
  height: 4.8rem;
  padding-left: 2rem;
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
</style>

<template>
  <div class="footer">
    <img
      src="../../src/assets/powered_by_24g.svg"
      alt="Powered by 24G Logo"
      class="footer-logo"
    />
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  background-color: #fff;
  height: 6rem;
  place-content: center;
  &-logo {
    height: 1.3rem;
    align-self: center;
  }
}

//! Media Queries

// XXL Desktop
@media (min-width: 2560px) {
  .footer {
    &-logo {
      height: 2rem;
    }
  }
}
</style>

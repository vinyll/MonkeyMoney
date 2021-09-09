<template>
  <div>
    <main>
      <nuxt />
    </main>
    <tabbar v-show="authenticated" />
  </div>
</template>

<script>
  export default {
    computed: {
      authenticated() {
        const user = this.$store.state.user
        return user && user.uid
      }
    }
  }
</script>

<style>
  html, body {
    min-height: 100vh;
    margin: 0;
  }
  html {
    background: #eee;
  }
  body {
    background: #f6f6f6;
    color: #888;
    max-width: 600px;
    margin: 0 auto;
  }
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.1s;
  }
  .page-enter,
  .page-leave-to {
    opacity: 0;
  }
</style>

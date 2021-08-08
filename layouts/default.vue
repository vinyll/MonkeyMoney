<template>
  <div>
    <main>
      <nuxt />
    </main>
    <tabbar v-show="this.user" />
  </div>
</template>

<script>
  export default {
    computed: {
      user() {
        return this.$store.state.user
      }
    }
  }
</script>

<style>
  body {
    background: #f6f6f6;
    color: #888;
  }
</style>

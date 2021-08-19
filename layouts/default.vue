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
  body {
    background: #f6f6f6;
    color: #888;
  }
</style>

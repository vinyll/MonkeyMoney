<template>
  <div>
    <NuxtLogo />
  </div>
</template>

<script>
  export default {
    computed: {
      user() {
        return this.$store.state.user || {}
      }
    },

    created() {
      if(!this.user.uid) this.$router.replace('signup')
    }
  }
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
  }
  svg {
    height: 100vh;
    display: flex;
    align-content: center;
  }
</style>

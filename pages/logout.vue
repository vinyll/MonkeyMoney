<template></template>

<script>
  export default {
    created() {
      this.$store.commit('logout')
    }
  }
</script>

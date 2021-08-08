<template>
  <div class="container">
    <van-row>
      <van-col span="12" offset="6">
        <img src="~/static/monkeymoney.svg" width="100%" />
        <van-button round type="primary" block to="/signup" v-show="!this.user">Sign up</van-button>
        <van-button round block v-show="!this.user" to="/login">Log in</van-button>
        <van-button round block v-show="this.user" to="/logout">Log out</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {

    computed: {
      user() {
        return this.$store.state.user || {}
      }
    },
  }
</script>

<style scoped>
  .container {
    text-align: center;
    justify-content: center;
    padding-top: 1rem;
  }

  .van-button {
    margin: 1rem 0;
  }
</style>

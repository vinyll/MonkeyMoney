<template>
  <div>
    <navbar title="My Profile" />
    <content-title>User info</content-title>
    <van-cell-group>
      <van-cell title="Email" :value="user.email" />
      <van-cell title="Password" value="" />
    </van-cell-group>

    <content-title>History</content-title>
    <van-cell-group>
      <van-cell title="Remaining credit" :value="user.credit" />
    </van-cell-group>
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

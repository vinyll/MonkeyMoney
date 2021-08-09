<template>
  <div>
    <navbar title="Profile, preferences and history" />
    <block>
      <content-title>User info</content-title>
      <van-cell-group>
        <van-cell title="Email" :value="user.email" />
        <van-cell title="Password" value="" />
        <van-cell title="Remaining credit" :value="user.credit" />
      </van-cell-group>

      <content-title>History</content-title>
      <van-cell-group>
        <van-cell title="12/08/2021" :value="user.credit" />
      </van-cell-group>
    </block>

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

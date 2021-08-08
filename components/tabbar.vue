<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/">Home</van-tabbar-item>
    <van-tabbar-item icon="paid" to="/deposit">Send</van-tabbar-item>
    <van-tabbar-item icon="down" to="/withdraw">Receive</van-tabbar-item>
    <van-tabbar-item icon="contact" to="/profile">profile</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    data() {
      return {
        active: "",
        currentPage: "",
        tabs: [
          {icon: '', label: "home", badge: ''}
        ]
      }
    }
  }
</script>

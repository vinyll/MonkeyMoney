<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">Tab</van-tabbar-item>
    <van-tabbar-item icon="search">Tab</van-tabbar-item>
    <van-tabbar-item icon="friends-o">Tab</van-tabbar-item>
    <van-tabbar-item icon="setting-o">Tab</van-tabbar-item>
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

<template>
  <van-nav-bar
      :title="title"
      :right-text="nextLabel"
      @click-right="nextCallback"
    >
    </van-nav-bar>
</template>

<script>
  export default {
    props: {
      title: String,
      nextFunction: Function,
      nextLabel: String
    },
    methods: {
      nextCallback() {
        this.nextFunction && this.nextFunction()
      }

    }
  }
</script>

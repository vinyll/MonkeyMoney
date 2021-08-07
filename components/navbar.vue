<template>
  <van-nav-bar
      :title="title"
      left-text="Back"
      :right-text="nextLabel"
      @click-left="$router.back()"
      @click-right="nextCallback"
      left-arrow
    >
    </van-nav-bar>
</template>

<script>
  export default {
    props: {
      title: "Monkey Money",
      nextFunction: null,
      nextLabel: ""
    },
    methods: {
      nextCallback() {
        debugger
        this.nextFunction && this.nextFunction()
      }

    }
  }
</script>

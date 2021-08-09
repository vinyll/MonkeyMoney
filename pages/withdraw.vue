<template>
  <div>
    <navbar title="Receive credit" />
    <block>
      <p>Are your receiving credit from someone?</p>
      <p>Read the code from her screen and type it here.</p>
      <input class="code" v-model="code" placeholder="a1b2" minlength="4" maxlength="4" autofocus required>
      <space />
      <van-button type="primary" @click="withdraw" :disabled="!this.code" block round>Validate</van-button>
    </block>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: "",
      }
    },

    methods: {
      withdraw() {
        debugger
      }
    }
  }
</script>

<style scoped>
  .code {
    font-size: 2.2rem;
    color: inherit;
    border: 1px dashed #888;
    text-align: center;
    display: block;
    width: 100%;
  }

  input::placeholder {
    color: #eee;
  }
</style>

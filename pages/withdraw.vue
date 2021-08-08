<template>
  <div>
    <navbar title="Receive credit" />
    <main>
      <content-title>Type the code that displays on the sender's screen</content-title>
      <van-row>
        <van-col span="22" offset="1">
          <input class="code" v-model="code" placeholder="a1b2c3d4" autofocus>
        </van-col>
      </van-row>

      <van-button type="primary" @click="withdraw" block>Validate</van-button>
    </main>
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
    font-size: 3rem;
    color: inherit;
    border: 1px dashed #888;
    text-align: center;
  }

  input::placeholder {
    color: #eee;
  }

  .van-button {
    margin-top: 3rem;
  }
</style>

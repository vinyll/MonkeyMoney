<template>
  <div>
    <navbar title="Receive credit" />
    <block>
      <p>Do you have a code? Enter it below and receive credit.</p>
      <input class="code" v-model="code" placeholder="a1b2" minlength="4" maxlength="4" autofocus required>
      <space />
      <van-button type="primary" :disabled="!this.code" @click="generateWithdrawal" block round>Validate</van-button>
    </block>

    <van-popup v-model="completed">
      <van-icon name="checked" />
      <p>You were credited of {amount}!</p>
    </van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: "",
        amount: 0,
        completed: false,
        transaction: null,
      }
    },

    methods: {
      generateWithdrawal() {
        this.$store.commit('withdraw', this.code)
        this.transaction = this.$store.state.getTransaction(this.code)
        this.completed = true
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

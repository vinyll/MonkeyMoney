<template>
  <div>
    <navbar title="Receive credit" />
    <block>
      <p>Do you have a code? Enter it below and receive credit.</p>
      <input class="code" v-model="code" placeholder="a1b2" minlength="4" maxlength="4" autofocus required>
      <space />
      <van-button type="primary" :disabled="!this.code" @click="generateWithdrawal" block round>Validate</van-button>
    </block>

    <van-popup v-model="transaction">
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
        transaction: null,
      }
    },

    methods: {
      async generateWithdrawal() {
        try {
          this.transaction = await this.$axios.$post('/api/withdraw', { code: this.code }, {
            headers: { 'Auth': this.$store.state.user.uid }
          })
        } catch(error) {
          console.error(error)
          debugger
          Notify('danger', String(error))
        }
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

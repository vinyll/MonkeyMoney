<template>
  <div>
    <navbar title="Receive credit" />
    <block>
      <p>Do you have a code? Enter it below and receive credit.</p>
      <input class="code" v-model="code" placeholder="a1b2" minlength="4" maxlength="4" autofocus required>
      <space />
      <van-button type="primary" :disabled="!this.code" @click="generateWithdrawal" block round>Validate</van-button>
    </block>

    <van-popup>
      <div class="popup">
        <van-icon name="checked" />
        <p>You were credited of {{amount}}</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import { Notify } from 'vant'

  export default {
    data() {
      return {
        code: "",
        amount: null,
      }
    },

    methods: {
      async generateWithdrawal() {
        const data = { email: this.email, password: this.password }

        this.$api('/login', { method: 'post', json: data })
        .then(transaction => {
          debugger
          if(!response.ok) return
          this.amount = transaction['edge']['amount']
          $nuxt.$store.dispatch('withdraw')
        })
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

  .popup {
    padding: 2rem;
    font-size: 1.5rem;
  }
</style>

<template>
  <div>
    <navbar :title="`Receive ${$config.currency.name}`" />
    <block>
      <p>Do you have a code? Enter it below and receive ${$config.currency.name}.</p>
      <input class="code" v-model="code" placeholder="a1b2" minlength="4" maxlength="4" autofocus required>
      <space />
      <van-button type="primary" :disabled="!this.code" @click="generateWithdrawal" block round>Validate</van-button>
    </block>


    <van-popup v-model="confirmed" position="bottom" :style="{ height: '268px' }" round>
      <div class="popup">
        <van-icon name="checked" />
        <p>You were credited of {{amount}}{{$config.currency.symbol}}</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import { Notify } from 'vant'
  import { Dialog } from 'vant'


  export default {
    data() {
      return {
        confirmed: false,
        code: "",
        amount: null,
      }
    },

    methods: {
      async generateWithdrawal() {
        const data = { code: this.code }

        this.$api(`/transaction/${this.code}`, { headers: {
          Auth: this.$store.state.user.uid
        } })
        .then((response) => {
          const transaction = response.json
          this.amount = transaction['edge']['amount']
          return Dialog.confirm({
            title: 'Check transaction',
            message: `You are receiving ${this.amount}${this.$config.currency.symbol}`,
          })
        })
        // Confirm
        .then(() => {
          this.confirmed = true
          this.code = ""
          return this.$api('/withdraw', { method: 'post', json: data, headers: {
            Auth: this.$store.state.user.uid
          } })
        })
        .then(response => {
          if(!response.ok) return
          const transaction = response.json
          this.amount = transaction['edge']['amount']
          this.$store.dispatch('withdraw')
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
    text-align: center;
  }

  .van-icon {
    font-size: 90px;
    display: flex;
    justify-content: center;
    color: rgb(31, 155, 35);
  }
</style>

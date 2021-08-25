<template>
  <div>
    <navbar :title="`Send ${$config.currency.name}`" />

    <block>
      <blockquote>
        <p>Enter the amount of {{$config.currency.symbol}} to send.</p>
        <p>This amount will be removed from your remaining credit and made available to your recipient.</p>
      </blockquote>
      <van-cell>
        <template #title>
          <input type="number" min=1 max=1000 v-model="amount" :placeholder="`60${$config.currency.symbol}`" autofocus required>
        </template>
      </van-cell>
      <van-button type="primary" :disabled="amount <= 0" round @click="generateDeposit" block>Transfer ></van-button>
    </block>

    <van-popup v-model="transaction" position="bottom" :style="{ height: '268px' }" round>
      <navbar :title="`Send ${amount}${$config.currency.symbol}`" />
      <block>
        <p class="code">{{code}}</p>
        <small>Giving this code will allow someone to take out this amount of {{$config.currency.name}} from your account.</small>
        <van-button type="danger" @click="cancel" block round>Cancel</van-button>
      </block>
    </van-popup>
  </div>
</template>

<script>
  import { Notify } from 'vant'

  export default {
    layout: "default",
    methods: {
      generateDeposit() {
        const data = { amount: this.amount }
        this.$api('/deposit', { method: 'post', json: data, headers: {
          Auth: this.$store.state.user.uid,
        }})
        .then(response => {
          if(!response.ok) return
          this.transaction = response.json
          this.$store.dispatch('deposit', { amount: this.amount })
        })
      },

      cancel() {
        this.amount = null
        this.transaction = null
      },
    },

    data() {
      return {
        amount: null,
        transaction: null,
      }
    },

    computed: {
      code() {
        return this.transaction && this.transaction.uid.split('-')[1]
      }
    }
  }
</script>

<style scoped>
  input {
    font-size: 2rem;
    border: 0;
    width: 100%;
  }
  input::placeholder {
    color: #ccc;
    filter: opacity(.3);
  }

  .code {
    font-size: 3rem;
    text-align: center;
    margin: 1rem;
    border: 1px dashed #888;
  }

  .van-button {
    margin-top: 2rem;
  }
</style>

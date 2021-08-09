<template>
  <div>
    <navbar title="Send credit" />

    <block>
      <blockquote>
        <p>Enter an amount to transfer.</p>
        <p>This amount will be removed from your remaining credit and added to your recipient once withdrawn.</p>
      </blockquote>
      <van-cell>
        <!-- Use the title slot to customize the title -->
        <template #title>
          <input type="number" min=1 max=1000 v-model="amount" placeholder="60" autofocus required>
        </template>
      </van-cell>
      <van-button type="primary" :disabled="amount <= 0" round @click="generateDeposit" block>Transfer ></van-button>
    </block>

    <van-popup v-model="transfering" position="bottom" :style="{ height: '268px' }" round>
      <navbar :title="'Send ' + amount + ' credits'" />
      <block>
        <p class="code">{{code}}</p>
        <small>Giving this code will allow someone to take out this credit from your account.</small>
        <van-button type="danger" @click="cancel" block round>Cancel</van-button>
      </block>
    </van-popup>
  </div>
</template>

<script>
  export default {
    layout: "default",
    methods: {
      generateDeposit() {
        this.transfering = true
        this.$store.commit('deposit', this.amount)
        this.code = this.transaction.uid
      },

      cancel() {
        this.code = ""
        this.transfering = false
      }
    },
    data() {
      return {
        transfering: false,
        amount: null,
      }
    },
    computed: {
      transaction() {
        const transactions = this.$store.state.transactions
        return transactions.length && transactions.slice(-1)[0]
      },
      code() {
        if(this.transaction) return this.transaction.uid.split('-')[1]
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
    color: #eee;
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

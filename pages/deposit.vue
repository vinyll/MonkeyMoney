<template>
  <div>
    <navbar title="Send credit" />

    <main>
      <input type="number" min=1 max=1000 v-model="amount" placeholder="60" autofocus required>
      <van-button type="info" :disabled="amount <= 0" @click="generateDeposit" block plain>Transfer</van-button>
    </main>

    <van-popup v-model="transfering" position="bottom" :style="{ height: '268px' }" round>
      <navbar :title="'Transfer ' + amount + ' credits'" />

      <p class="code">{{code}}</p>

      <small>Giving this code will allow someone to take out this credit from your account.</small>

      <van-button type="info" @click="cancel" block>Cancel</van-button>
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
        this.code = "1a2b3c"
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
        code: "",
      }
    }
  }
</script>

<style scoped>
  * {
    --green: rgb(158, 225, 148);
  }
  input {
    font-family: inherit;
    font-size: 10rem;
    border: 0;
    text-align: center;
    background-color: transparent;
  }
  input::placeholder {
    color: #eee;
  }

  div {
    margin: 0 auto;
    align-content: space-between;
    align-items: center;
    text-align: center;
  }

  .code {
    font-size: 5rem;
    text-align: center;
    margin: 1rem;
    border: 1px dashed #888;
  }

  .van-button {
    margin-top: 2rem;
  }
</style>

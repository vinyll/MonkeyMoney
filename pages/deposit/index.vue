<template>
  <div>
    <navbar title="Deposit" nextLabel="Submit" :next-function="generateDeposit" />

    <main>
      <input type="number" min=1 max=1000 v-model="amount" placeholder="60" required>
    </main>
  </div>
</template>

<script>
  export default {
    layout: "default",
    methods: {
      generateDeposit() {
        this.$store.commit('deposit', { amount: this.amount })
        this.$router.push('deposit/preview')
      }
    },
    data() {
      return {
        amount: null,
      }
    }
  }
</script>

<style scoped>
  input {
    font-family: inherit;
    font-size: 10rem;
    border: 0;
    text-align: center;
  }
  main {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>

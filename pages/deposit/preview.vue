<template>
  <div>
    <van-nav-bar
      :title="'Depositing ' + transaction.amount"
      left-text="Back"
      @click-right="generateDeposit"
      left-arrow
    >
      <template #right>
        <span class="van-nav-bar__text">Next</span>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
  export default {
    computed: {
      transaction() {
        const trans = this.$store.state.transactions.slice(-1)
        return trans && trans[0]
      }
    }
  }
</script>

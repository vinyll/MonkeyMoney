<template>
  <div>
    <navbar title="Profile, preferences and history" />
    <block>
      <content-title>User info</content-title>
      <van-cell-group>
        <van-cell title="Email" :value="user.email" />
        <van-cell title="Password" value="********" />
        <van-cell title="Remaining credit" :value="`${user.credit}${$config.currency.symbol}`" />
      </van-cell-group>

      <content-title>History</content-title>
      <van-cell-group v-for="transaction in user.transactions">
        <van-cell :title="formatDate(transaction.edge.datetime)" :value="`${(transaction.type === 'withdrawal') ? '+' : '-'}${transaction.edge.amount}${$config.currency.symbol}`" />
      </van-cell-group>
    </block>

  </div>
</template>

<script>
  export default {
    computed: {
      user() {
        return this.$store.state.user || {}
      },
    },

    methods: {
      formatDate(timestamp) {
        const date = new Date(timestamp * 1000)
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
      }
    }
  }
</script>

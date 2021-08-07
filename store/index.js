export const state = () => ({
  transactions: []
})

export const mutations = {
  deposit(state, { amount }) {
    debugger
    state.transactions.push({
      amount: Number(amount)
    })
  }
}

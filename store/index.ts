interface User {
  uid: string
  username: string
  email: string
  password: string
}

interface Transaction {
  from?: string
  to?: string
  amount: number
}

interface State {
  transactions: [Transaction?]
  user?: User
}

export function state(): State {
  return {
    transactions: []
  }
}

export const mutations = {
  deposit(state:State, { amount }: Transaction) {
    debugger
    state.transactions.push({
      amount: Number(amount)
    })
  }
}

interface User {
  uid: string
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

const storedUser = localStorage.getItem('user')
const user = storedUser && JSON.parse(storedUser)

export function state(): State {
  return {
    transactions: [],
    user
  }
}

export const mutations = {
  login(state: State, user: User) {
    localStorage.setItem('user', JSON.stringify(user))
    state.user = user
    $nuxt.$router.push('/')
  },

  logout(state: State) {
    localStorage.removeItem('user')
    delete state.user
    $nuxt.$router.go('/')
  },

  transaction_add(state: State, transaction) {
    state.transactions.push(transaction)
  },

  deposit(state:State, amount: Number) {
    $nuxt.$axios.post('/api/deposit', { amount }, {
      headers: { 'Auth': state.user.uid }
    })
      .then((response) => {
        this.commit('transaction_add', response.data)
      })
      .catch((error) => {
        Notify({ type: 'danger', message: error.response.data, duration: 5000 })
      })
  }
}

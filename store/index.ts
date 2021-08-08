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
    $nuxt.$router.push('/')
  },

  deposit(state:State, amount: Number) {
    debugger
    state.transactions.push({
      amount: Number(amount)
    })
  }
}

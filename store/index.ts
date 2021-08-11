import { AxiosInstance } from 'axios'
import { VueRouter } from 'vue-router/types/router'


interface User {
  uid: string
  email: string
  password: string
}

interface Transaction {
  from?: string
  to?: string
  code: string
  amount: number
  uid: string
}

interface State {
  transactions: [Transaction]
  user?: User
}

interface NuxtInstance {
  $router: VueRouter
  $axios: AxiosInstance
}


declare const $nuxt: NuxtInstance
declare const Notify: Function

const storedUser = localStorage.getItem('user')
const user = storedUser && JSON.parse(storedUser)


export function state(): State {
  return {
    transactions: [],
    user,
    getTransaction(code) {
      return this.transactions.find(t => t.uid.split('-')[1] === code)
    },
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

  transaction_add(state: State, transaction: Transaction) {
    state.transactions.push(transaction)
  },

  withdraw(state:State, code: String) {
    $nuxt.$axios.post('/api/withdraw', { code }, {
      headers: { 'Auth': state.user.uid }
    })
      // .then((response: any) => {
      //   this.commit('transaction_add', response.data)
      // })
      // .catch((error) => {
      //   Notify({ type: 'danger', message: error.response.data, duration: 5000 })
      // })
  }
}

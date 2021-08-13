import { AxiosInstance } from 'axios'
import { VueRouter } from 'vue-router/types/router'


interface User {
  uid: string
  email: string
  credit: number
  groups?: [string]
}

interface Transaction {
  from?: string
  to?: string
  code: string
  amount: number
  uid: string
}

interface State {
  transactions: [Transaction?]
  user: User
}

interface NuxtInstance {
  $router: VueRouter
  $axios: AxiosInstance
}


declare const $nuxt: NuxtInstance
declare const Notify: Function

export function state(): State {
  return {
    transactions: [],
    user: {
      uid: "",
      email: "",
      credit: 0,
    },
  }
}

export const actions = {
  async nuxtClientInit({ commit }: { commit: any }, context: any) {
    await context.store.dispatch('loadUser')
  },

  async loadUser({ commit }, context) {
    try {
      const uid = JSON.parse(localStorage.getItem('user', {})).uid
      if(!uid) return this.$router.push('/')
      const user = await this.$axios.$get('/api/me', {
        headers: { 'Auth': uid }
      })
      if(!user['uid']) throw new Error("Could not load user data")
      commit('login', user)
    } catch(error) {
      console.error(error)
    }
  },

  deposit({ commit }, context) {
    context.store.dispatch('loadUser')
  },

  withdraw({ commit }, context) {
    context.store.dispatch('loadUser')
  },
}

export const mutations = {
  login(state: State, user: User) {
    localStorage.setItem('user', JSON.stringify(user))
    state.user = user
    this.$router.push('/')
  },

  logout(state: State) {
    localStorage.removeItem('user')
    state.user = {}
    $nuxt.$router.push('/')
  },
}

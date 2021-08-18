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
  $axios: any
}


declare const $nuxt: NuxtInstance
declare const Notify: Function

const defaultUser = {
  uid: "",
  email: "",
  credit: 0,
}

export function state(): State {
  return {
    transactions: [],
    user: defaultUser,
  }
}

export const actions = {
  async nuxtClientInit({ commit }: { commit: any }, context: any) {
    await context.store.dispatch('loadUser')
  },

  async loadUser({ commit }: { commit: any }, context: any) {
    try {
      const uid = JSON.parse(localStorage.getItem('user') || '{}').uid
      if(!uid) return $nuxt.$router.push('/')
      const user = await $nuxt.$axios.$get('/api/me', {
        headers: { 'Auth': uid }
      })
      if(!user['uid']) throw new Error("Could not load user data")
      commit('login', user)
    } catch(error) {
      console.error(error)
    }
  },

  deposit(context: any) {
    context.store.dispatch('loadUser')
  },

  withdraw(context: any) {
    context.store.dispatch('loadUser')
  },
}

export const mutations = {
  login(state: State, user: User) {
    localStorage.setItem('user', JSON.stringify(user))
    state.user = user
    $nuxt.$router.push('/')
  },

  logout(state: State) {
    localStorage.removeItem('user')
    state.user = defaultUser
    $nuxt.$router.push('/')
  },
}

import { AxiosInstance } from 'axios'
import { VueRouter } from 'vue-router/types/router'

import { Locale } from 'vant'

// import frFR from 'vant/es/locale/lang/fr-FR'
// Locale.use('fr-FR', frFR)

import enUS from 'vant/es/locale/lang/en-US'
Locale.use('en-US', enUS)

interface User {
  uid: string
  email: string
  credit: number
  groups?: [string],
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

export const actions: any = {
  async nuxtClientInit(context: any) {
    context.dispatch('loadUser')
  },

  loadUser({ commit }: { commit: any }) {
    const uid = JSON.parse(localStorage.getItem('user') || '{}').uid
    let user = { uid: null }
    if(uid) {
      const response = this.$api('/me', {
        headers: { 'Auth': uid }
      }).then((response: any) => {
        user = response.json
        user.uid ? commit('login', user) : commit('logout')
      })
    }
  },

  deposit(context: any) {
    context.dispatch('loadUser')
  },

  withdraw(context: any) {
    context.dispatch('loadUser')
  },
}

export const mutations: any = {
  login(state: State, user: User) {
    localStorage.setItem('user', JSON.stringify(user))
    state.user = user
  },

  logout(state: State) {
    localStorage.removeItem('user')
    state.user = defaultUser
    if(this.$router.currentRoute.path !== '/') {
      this.$router.push('/')
      location.href = '/'
    }
  },
}

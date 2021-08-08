<template>
  <div>
    <navbar title="Welcome back! 👋🏼" />
    <van-form>
      <van-field
        v-model="email"
        type="email"
        name="Email"
        label="Email"
        :rules="[{ required: true, message: 'Email is required' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="Password"
        label="Password"
        :rules="[{ required: true, message: 'Password is required' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" @click="onSubmit">
          Login
        </van-button>
      </div>
    </van-form>
    <nuxt-link to="signup">I don't have an account yet</nuxt-link>
  </div>
</template>

<script>
  import { Notify } from 'vant'

  export default {
    layout: "auth",
    computed: {
      user() {
        return this.$store.state.user
      }
    },

    data() {
      return {
        email: "",
        password: "",
      }
    },

    methods: {
      onSubmit() {
        const data = { email: this.email, password: this.password }

        this.$axios.post('/api/login', data)
        .then((response) => {
          this.$store.commit('login', response.data)
        })
        .catch((error) => {
          Notify({ type: 'danger', message: error.response.data, duration: 5000 })
        })
      }
    },

    created() {
      if(this.user) this.$router.push('/')
    }
  }
</script>

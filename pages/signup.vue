<template>
  <div>
    <navbar title="Create your account" />
    <van-form>
      <van-field
        v-model="email"
        name="email"
        label="Email"
        type="email"
        placeholder="Your email"
        :rules="[{ required: true, message: 'Email is required' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="Password"
        placeholder="A great password you can make up"
        :rules="[{ required: true, message: 'Password is required' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" @click="onSubmit">
          Create my account
        </van-button>
      </div>
    </van-form>
    <nuxt-link to="login">I already have an account</nuxt-link>
  </div>
</template>

<script>
  import { Notify } from 'vant'

  export default {
    layout: "auth",
    data() {
      return {
        username: "",
        email: "",
        password: "",
      }
    },
    methods: {
      async onSubmit() {
        this.$axios.post('/api/signup', {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.$store.commit('user/login', { token: response.token })
          this.$router.push('index')
        })
        .catch((error) => {
          Notify({ type: 'danger', message: error.response.data })
        })
      }
    },
  }
</script>

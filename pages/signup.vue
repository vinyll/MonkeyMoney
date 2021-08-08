<template>
  <div>
    <navbar title="Create your account" />
    <van-row>
      <van-col span="22" offset="1">
        <content-title>Enter your account details</content-title>
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
            placeholder="A great password"
            :rules="[{ required: true, message: 'Password is required' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" @click="onSubmit">
              Create my account
            </van-button>
          </div>
        </van-form>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="22" offset="1">
        <nuxt-link to="login">I already have an account</nuxt-link>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { Notify } from 'vant'

  export default {

    data() {
      return {
        email: "",
        password: "",
      }
    },

    methods: {
      onSubmit() {
        this.$axios.post('/api/signup', {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.$store.commit('login', response.data)
        })
        .catch((error) => {
          Notify({ type: 'danger', message: error.response.data, duration: 5000 })
        })
      }
    },
  }
</script>

<template>
  <div>
    <navbar title="Welcome back! 👋🏼" />
    <van-row>
      <van-col span="22" offset="1">
        <content-title>Log in with your existing account</content-title>
        <van-form>
          <van-field
            autofocus
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
      </van-col>
    </van-row>

    <van-row>
      <van-col span="22" offset="1">
        <nuxt-link to="signup">I don't have an account yet</nuxt-link>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
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

        this.$api('/login', { method: 'post', json: data })
        .then(response => {
          if(!response.ok) return
          this.$store.commit('login', response.json)
          this.$router.push('/')
        })
      }
    },
  }
</script>

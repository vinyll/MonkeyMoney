<template>
  <div>
    <van-form>
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
  export default {
    layout: "auth",
    data() {
      return {
        email: "",
        password: "",
      }
    },
    methods: {
      onSubmit() {
        debugger
      }
    },
  }
</script>

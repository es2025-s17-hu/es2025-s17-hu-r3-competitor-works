<script setup>

</script>

<template>
  <main>
    <div class="container">
      <div class="row justify-center">
        <form class="login-form" @submit.prevent="login()">
          <h2 class="sub-titie text-center">Login</h2>
          <p class="little-text">Username</p>
          <input type="text" class="form-text" id="txt-username" v-model="loginInformation.username" placeholder="Username">
          <p class="little-text">Password</p>
          <input type="password" class="form-text" id="txt-password" v-model="loginInformation.password" placeholder="Password">
          <div class="row" style="margin-top: 20px;">
            <button class="btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "LoginPage",
  props: ["baseUrl"],
  emits: ["changePage", "changeToken"],
  data() {
    return {
      loginInformation: {
        username: "",
        password: "",
      }
    }
  },
  methods: {
    login() {
      fetch(this.baseUrl + '/login', {
        method: "POST",
        body: JSON.stringify(this.loginInformation),
        headers: {
          "Content-Type": "application/json"
        },
      }).then(response => response.json()).then(data => {
        this.$emit("changeToken", data.token);
        this.$emit("changePage", "home");
      })
    }
  },
}
</script>

<style scoped>
.login-form {
  border: 2px solid black;
  padding: 50px;
  border-radius: 10px;
}
</style>
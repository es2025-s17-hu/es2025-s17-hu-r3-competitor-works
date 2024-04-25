<script setup>
import HelloWorld from './components/HelloWorld.vue'
import LoginPage from "./components/LoginPage.vue";
import HomePage from "./components/HomePage.vue";
import MenuCategoryPage from "./components/MenuCategoryPage.vue";
import MenuItemPage from "./components/MenuItemPage.vue";
</script>

<template>
  <header class="container header-container" :style="headerStyle()">
    <div class="row justify-between" :style="rowStyle()">
      <div class="row" style="align-items: center;">
        <a v-if="token == null" href="#" @click.prevent="changePage('login')">
          <img src="./assets/images/logo.svg" alt="Logo" class="logo">
        </a>
        <a v-if="token != null" href="#" @click.prevent="changePage('home')">
          <img src="./assets/images/logo.svg" alt="Logo" class="logo">
        </a>
        <nav id="nav">
          <a v-if="token == null" :class="linkClass('login')" href="#" @click.prevent="changePage('login')">Login</a>
          <a v-if="token != null" :class="linkClass('home')" href="#" @click.prevent="changePage('home')">Home</a>
          <a v-if="token != null && page != 'home'" href="#" @click.prevent="changePage('home')">Back to Dashboard</a>
          <a v-if="token != null" href="#" @click.prevent="logout()">Log out</a>
        </nav>
      </div>
    </div>
  </header>
  <HomePage @changePage="changePage" @changeToken="changeToken" :baseUrl="baseUrl" v-if="page === 'home'"></HomePage>
  <MenuCategoryPage @changePage="changePage" @changeToken="changeToken" :baseUrl="baseUrl" v-else-if="page === 'menu-category'"></MenuCategoryPage>
  <MenuItemPage @changePage="changePage" @changeToken="changeToken" :baseUrl="baseUrl" v-else-if="page === 'menu-item'"></MenuItemPage>
  <LoginPage @changePage="changePage" @changeToken="changeToken" :baseUrl="baseUrl" v-else></LoginPage>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      page: "Home",
      headerShow: false,
      baseUrl: "https://module-c-4.dineease.com/api/v1",
      token: null,
    }
  },
  methods: {
    changePage(page) {
      this.page = page;
      localStorage.setItem("page", this.page);
      location.hash = this.page;
    },
    changeToken(token) {
      localStorage.setItem('token', token);
      this.token = token;
    },
    headerStyle() {
      return {
        top: `${this.headerShow ? 50: 0}px`,
        maxWidth: `${this.headerShow ? 768 : 1280}px`,
        boxShadow: `${this.headerShow ? `0 0 10px black` : ''}`
      }
    },
    rowStyle() {
      return {
        width: `${this.headerShow ? `auto`: `100%`}`
      }
    },
    linkClass(page) {
      if (this.page === page) {
        return "selected";
      } else {
        return "";
      }
    },
    logout() {
      this.token = null;
      localStorage.removeItem("token");
      this.changePage("login");
    }
  },
  mounted() {
    this.page = location.hash.replace("#", "");
    this.token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
  }
}
</script>

<style scoped>
</style>

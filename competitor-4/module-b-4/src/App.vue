<script setup>
import HomePage from "./components/HomePage.vue";
import DemoPage from "./components/DemoPage.vue";
</script>

<template>
  <header class="container header-container" :style="headerStyle()">
    <div class="row justify-between" :style="rowStyle()">
      <div class="row" style="align-items: center;">
        <img src="./assets/images/logo.svg" alt="Logo" class="logo">
        <nav id="nav">
          <a :class="linkClass('Home')" href="#" @click.prevent="page = 'Home'">Overview</a>
          <a href="#" @click.prevent="page = 'Home'">Features</a>
          <a href="#" @click.prevent="page = 'Home'">About Us</a>
          <a href="#" @click.prevent="page = 'Home'">Pricing</a>
        </nav>
      </div>
      <div class="row" style="display: flex; justify-content: flex-end" @click="changePage('Demo')">
        <button class="btn">Book a demo</button>
      </div>
    </div>
  </header>
  <DemoPage @changePage="changePage" v-if="page === 'Demo'"></DemoPage>
  <HomePage @changePage="changePage" v-else></HomePage>
  <footer>
    <div class="container">
      <div class="row justify-between">
        <div class="row flex-column" style="gap: 20px">
          <img src="./assets/images/logo.svg" alt="logo" class="footer-logo">
          <div class="row">
            <a href="#" class="text-white">Terms of Use</a>
            <a href="#" class="text-white" style="margin-left: 20px;">Privacy Policy</a>
          </div>
          <div class="row">
            <span>+36 30 123 4567</span>
            <span>support@dineease.com</span>
          </div>
          <div class="row copyright">
            &copy;2024 - All rights reserved
          </div>
        </div>
        <div class="row" style="justify-content: flex-end">
          <div class="follow-box">
            <p>Follow Us</p>
            <div class="icon-container">
              <img src="./assets/images/facebook.svg" alt="facebook icon">
              <img src="./assets/images/instagram.svg" alt="instagram icon">
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      page: "Home",
      headerShow: false,
    }
  },
  methods: {
    changePage(page) {
      this.page = page;
      localStorage.setItem("page", this.page);
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
    }
  },
  mounted() {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 100) {
        this.headerShow = true;
      } else {
        this.headerShow = false;
      }
    })
    this.page = localStorage.getItem("page") ? localStorage.getItem("page") : "";
  }
}
</script>

<style scoped>
.icon-container {
  display: flex;
  gap: 10px;
}
</style>

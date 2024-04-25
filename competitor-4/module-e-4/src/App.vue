<script setup>
import LoginPage from "./components/LoginPage.vue";
import OrderPage from "./components/OrderPage.vue";
import TableSelectPage from "./components/TableSelectPage.vue";
</script>

<template>
  <OrderPage @changePage="changePage" :chooseTable="chooseTable" :baseUrl="baseUrl" v-if="page === 'order'"></OrderPage>
  <TableSelectPage @changeTable="changeTable" @changePage="changePage" :baseUrl="baseUrl" v-else-if="page === 'table-select'"></TableSelectPage>
  <LoginPage @changePage="changePage" :baseUrl="baseUrl" v-else></LoginPage>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      page: "login",
      baseUrl: "https://module-c-4-solution.dineease.com/api/v1",
      chooseTable: null,
    }
  },
  methods: {
    /**
     * Change to other page
     * @param page
     */
    changePage(page) {
      this.page = page;
      localStorage.setItem("page", this.page);
      location.hash = this.page;
    },

    /**
     * Change choose table
     * @param table
     */
    changeTable(table) {
      this.chooseTable = table;
    }
  },
  mounted() {
    this.page = location.hash.replace("#", "");
    window.onhashchange = () => {
      this.page = location.hash.replace("#", "");
    }
  }
}
</script>

<style scoped>
</style>

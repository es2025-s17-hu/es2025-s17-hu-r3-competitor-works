<script setup>

</script>

<template>
  <main>
    <div class="container">
      <div class="grid-container">
        <div class="grid" @click="changePage('menu-category')">Menu	Categories</div>
        <div class="grid" @click="changePage('menu-item')">Menu	Items</div>
        <div class="grid disabled">Tables</div>
        <div class="grid disabled">Users</div>
        <div class="grid disabled">Statistics</div>
        <div class="grid disabled">Preferences</div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomePage",
  props: ["baseUrl"],
  emits: ["changePage", "changeToken"],
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    }
  }
}
</script>

<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    gap: 30px;
  }

  .grid {
    padding: 50px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid mediumpurple;
    background-color: white;
    color: black;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
  }
  
  .grid.disabled {
    background-color: gray;
    cursor: not-allowed;
  }
</style>
<script setup>

</script>

<template>
  <main>
    <div class="container">
      <h2 class="text-center sub-title">Menucard Categories</h2>
      <div class="menu-card-container">
        <div class="menu-card" v-for="category in categories" :key="category.id">
          <div class="row">
            <span style="user-select: none">{{ category.name }}</span>
          </div>
          <div class="row" style="justify-content: flex-end; gap: 30px;">
            <button class="black-btn">Edit</button>
            <button class="black-btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MenuCategoryPage",
  props: ["baseUrl"],
  emits: ["changePage", "changeToken"],
  data() {
    return {
      categories: [],
    }
  },
  methods: {
    getCategories() {
      fetch(this.baseUrl + '/menuCategories').then(response => response.json()).then(data => {
        this.categories = data;
      });
    },
  },
  mounted() {
    this.getCategories();
  },
}
</script>

<style scoped>
  .menu-card-container {
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
  }

  .menu-card {
    width: 100%;
    border-radius: 10px;
    border: 2px solid mediumpurple;
    padding: 10px 20px;
    cursor: grab;
    display: flex;
    justify-content: space-between;
  }
  
  .menu-card:active {
    cursor: grabbing;
  }

  .black-btn {
    border: none;
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
  }
</style>
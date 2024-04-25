<script setup>

</script>

<template>
  <main>
    <div class="container">
      <h2 class="text-center sub-title">Menu Items</h2>
      <div class="row justify-center">
        <select class="form-select" v-model="selectCategory" :disabled="editItem !== null" style="width: 75%">
          <option :value="category.id" v-for="category in categories">{{ category.name }}</option>
        </select>
      </div>
      <table class="item-table">
        <tr class="first-row">
          <th>Name</th>
          <th>Type</th>
          <th>Price</th>
        </tr>
        <tr v-for="filterItem in filterItems" :class="trClass()" @click="chooseEditItem(filterItem)">
          <td>{{ filterItem.name }}</td>
          <td>{{ filterItem.type }}</td>
          <td>{{ filterItem.price }}</td>
        </tr>
      </table>
    </div>
    <div class="edit-menu-form" v-if="editItem">
      <h2 class="sub-title text-center">{{ this.action }} Menu Item</h2>
      <form @submit.prevent="saveItem()">
        <p class="little-text">Name*</p>
        <input type="text" class="form-text" v-model="editItem.name" placeholder="name" required>
        <p class="little-text">Price*</p>
        <input type="number" class="form-text" v-model="editItem.price">
        <p class="little-text">Type*</p>
        <select class="form-select" v-model="editItem.type">
          <option value="FOOD">FOOD</option>
          <option value="DRINK">DRINK</option>
          <option value="OTHER">OTHER</option>
        </select>
        <p class="little-text">Category*</p>
        <select class="form-select" v-model="editItemCategory">
          <option :value="category.id" v-for="category in categories">{{ category.name }}</option>
        </select>
        <div class="row" style="margin-top: 20px;">
          <button class="black-btn">{{ this.action === 'Create' ? 'Create' : 'Save' }}</button>
          <button type="button" v-if="this.action === 'Edit'" class="black-btn" @click="deleteItem()">Delete</button>
          <button type="button" class="black-btn" @click="editItem = null">Cancel</button>
        </div>
      </form>
    </div>
    <div class="new-item-button" @click="chooseNewItem()">+</div>
  </main>
</template>

<script>
export default {
  name: "MenuItemPage",
  props: ["baseUrl"],
  emits: ["changePage", "changeToken"],
  data() {
    return {
      categories: [],
      items: [],
      selectCategory: null,
      editItem: null,
      editItemCategory: null,
      action: 'Edit',
    }
  },
  computed: {
    filterItems() {
      return this.items.filter(item => item.menuCategoryId == this.selectCategory);
    }
  },
  methods: {
    getCategories() {
      fetch(this.baseUrl + '/menuCategories').then(response => response.json()).then(data => {
        this.categories = data;
        this.selectCategory = this.categories[0].id;
      });
    },
    getItems() {
      fetch(this.baseUrl + '/menuItems').then(response => response.json()).then(data => {
        this.items = data;
      });
    },
    chooseEditItem(item) {
      if (this.editItem) return;
      this.action = 'Edit';
      this.editItemCategory = item.menuCategoryId;
      this.editItem = item;
    },
    chooseNewItem() {
      if (this.editItem) return;
      this.action = 'Create';
      this.editItemCategory = this.categories[0].id;
      this.editItem = {
        name: "",
        type: 'FOOD',
        price: 0,
      };
    },
    trClass() {
      let classArray = [];
      if (!this.editItem) {
        classArray.push("selected-row");
      }
      return classArray.join(" ");
    },
    saveItem() {
      let url = '/menuItems/' + this.editItem.id;
      if (this.action === "Create") url = '/menuItems';
      fetch(this.baseUrl + url, {
        method: this.action === "Create" ? 'POST' : "PUT",
        body: JSON.stringify({
          name: this.editItem.name,
          type: this.editItem.type,
          menuCategoryId: this.editItemCategory,
          price: this.editItem.price,
        }),
        headers: {
          "Content-Type": "application/json"
        },
      }).then(response => response.json()).then(data => {
        this.getItems();
        this.editItem = null;
      });
    },
    deleteItem() {
      let url = '/menuItems/' + this.editItem.id;
      fetch(this.baseUrl + url, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
      }).then(response => response.json()).then(data => {
        this.getItems();
        this.editItem = null;
      });
      this.getItems();
      this.editItem = null;
    },
  },
  mounted() {
    this.getCategories();
    this.getItems();
  },
}
</script>

<style scoped>

  main {
    padding-bottom: 60px;
    position: relative;
  }

  .form-select {
    padding: 10px;
    width: 100%;
  }

  .item-table {
    width: 100%;
    margin-top: 40px;
    border-collapse: collapse;
  }

  .item-table tr,th,td {
    border: 1px solid black;
    padding: 10px;
  }

  .selected-row {
    cursor: pointer;
  }

  .selected-row:hover {
    background-color: lightgray;
  }

  .first-row {
    background-color: mediumpurple;
    color: white;
  }

  .edit-menu-form {
    width: 700px;
    padding: 30px;
    border: 2px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background-color: white;
  }

  .black-btn {
    border: none;
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
  }

  .new-item-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: mediumpurple;
    color: white;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 30px;
    cursor: pointer;
  }
</style>
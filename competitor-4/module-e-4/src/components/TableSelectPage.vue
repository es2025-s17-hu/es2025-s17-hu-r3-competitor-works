<script setup>

</script>

<template>
  <main>
    <h2 class="sub-title text-center">Select a Table</h2>
    <hr>
    <div class="table-container">
      <div :class="tableClass(table)" v-for="table in tables" @click="clickTable(table)" :style="tableStyle(table)">{{ table.name }}</div>
    </div>
  </main>
</template>

<script>
export default {
  name: "TableSelectPage",
  props: ["baseUrl"],
  emits: ["changePage", "changeTable"],
  data() {
    return {
      tables: [],
      chooseTable: null,
    }
  },
  methods: {
    getTables() {
      fetch(this.baseUrl + '/tables', {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }).then(response => response.text()).then(data => {
        data = JSON.parse(data);
        this.tables = data;
      })
    },
    tableClass(table) {
      let classArray = ["table"];
      if (table == this.chooseTable) {
        classArray.push("selected");
      }
      return classArray.join(" ");
    },
    tableStyle(table) {
      return {
        width: `${table.width}px`,
        height: `${table.height}px`,
        top: `${table.y}px`,
        left: `${table.x}px`,
        backgroundColor: table.hasOpenOrder ? 'tomato' : 'purple',
      }
    },
    clickTable(table) {
      this.chooseTable = table;
      this.$emit("changeTable", table);
      this.$emit("changePage", 'order');
    }
  },
  mounted() {
    this.getTables();
  }
}
</script>

<style scoped>
main {
  width: 100%;
}

/**
  Table CSS
 */
.table-container {
  width: 100%;
  position: relative;
}

.table {
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  user-select: none;
  filter: brightness(.9);
}

.table.selected {
  filter: brightness(1.5);
}
</style>
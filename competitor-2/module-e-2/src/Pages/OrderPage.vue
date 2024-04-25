<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const tableId = route.params.id;

const order = ref();
const tables = ref();
const categories = ref();
const items = ref();

const selectedCategory = ref();
const exiting = ref(false);

const groupedItems = computed(() => {
  let groups = {};

  for (const item of order.value.OrderItems) {
    const id = item.MenuItem.id;

    if (!(id in groups)) {
      groups[id] = {
        id: id,
        name: item.MenuItem.name,
        latest: 0,
        qty: 0,
      };
    }

    groups[id].qty++;
    let date = Date.parse(item.createdAt);
    if (groups[id].latest < date) {
      groups[id].latest = date;
    }
  }

  groups = Object.values(groups);
  groups.sort((a, b) => (a.latest < b.latest ? -1 : 1));
  groups.reverse();

  return groups;
});

const total = computed(() => {
  return order.value.OrderItems.reduce(
    (sum, current) => (sum += Number(current.MenuItem.price)),
    0
  );
});

const shownItems = computed(() => {
  return items.value.filter((x) => x.menuCategoryId == selectedCategory.value);
});

function CategoryColor(id) {
  const category = categories.value.find((x) => x.id == id);
  return `var(--color-${(categories.value.indexOf(category) % 6) + 1})`;
}

const loaded = computed(() => {
  return order.value && tables.value && categories.value && items.value;
});

async function AddItem(item) {
  const response = await fetch(
    "https://module-c-2-solution.dineease.com/api/v1/orderItems",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: order.value.id,
        menuItemId: item.id,
        quantity: 1,
      }),
    }
  );

  const data = await response.json();
  data.MenuItem = item;
  order.value.OrderItems.push(data);
}

function CloseOrder() {
  exiting.value = true;

  const response = fetch(
    `https://module-c-2-solution.dineease.com/api/v1/orders/tables/${tableId}/close`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }
  );

  setTimeout(() => {
    router.push("/tables");
  }, 5000);
}

onMounted(() => {
  fetch(
    "https://module-c-2-solution.dineease.com/api/v1/orders/tables/" + tableId,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }
  ).then((resp) =>
    resp.json().then((data) => {
      order.value = data;
    })
  );

  fetch("https://module-c-2-solution.dineease.com/api/v1/tables", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  }).then((resp) =>
    resp.json().then((data) => {
      tables.value = data;
    })
  );

  fetch("https://module-c-2-solution.dineease.com/api/v1/menuCategories", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  }).then((resp) =>
    resp.json().then((data) => {
      categories.value = data;
      selectedCategory.value = data[0].id;
    })
  );

  fetch("https://module-c-2-solution.dineease.com/api/v1/menuItems", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  }).then((resp) =>
    resp.json().then((data) => {
      items.value = data;
    })
  );
});
</script>

<template>
  <div class="order" v-if="loaded">
    <div class="sidebar">
      <header>
        <img src="/img/table-logo.png" alt="Table icon" />
        <h2>{{ tables.find((x) => x.id == tableId).name }}</h2>
      </header>
      <div>
        <div class="item" v-for="i in groupedItems" :key="i.id">
          <span class="qty">x{{ i.qty }}</span>
          {{ i.name }}
        </div>
      </div>
      <div class="total">
        <span>Sum:</span>
        <span>{{ total }} Ft</span>
      </div>
      <div class="buttons">
        <button @click="router.push('/tables')">Exit</button>
        <button @click="CloseOrder()">Close Order</button>
      </div>
    </div>
    <div class="menu">
      <div class="categories">
        <button
          v-for="c in categories"
          :key="c.id"
          :style="{ 'background-color': CategoryColor(c.id) }"
          :class="{ selected: selectedCategory == c.id }"
          @click="selectedCategory = c.id"
        >
          {{ c.name }}
        </button>
      </div>
      <div class="items">
        <div
          class="menuItem"
          v-for="i in shownItems"
          :key="i.id"
          @click="AddItem(i)"
        >
          <div
            class="stripe"
            :style="{ 'background-color': CategoryColor(selectedCategory) }"
          ></div>
          <h4>{{ i.name }}</h4>
          <p>{{ i.price }} Ft</p>
        </div>
      </div>
    </div>
  </div>
  <div class="exit" v-if="exiting">
    <span>Printing bill...</span>
  </div>
</template>

<style scoped>
.order {
  display: flex;
  height: 100vh;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  min-width: 350px;
  padding: 1rem;

  border-right: 2px solid black;
}

header,
.total {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid white;
}

header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

header img {
  height: 2.5rem;
}

.item {
  background-color: var(--bg-dark-color);
  padding: 0.5rem 1.5rem;
  border-bottom: 1px solid gray;
}

.qty {
  background-color: var(--surface-color);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  margin-right: 0.5rem;
}

.total {
  display: flex;
  justify-content: space-between;

  margin-top: auto;
  font-size: 1.2rem;
}

.buttons {
  display: flex;
  justify-content: stretch;
  gap: 1rem;
}

.buttons button {
  width: 100%;
}

.buttons button:nth-child(2) {
  background-color: var(--color-5);
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  width: 100%;
}

.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.categories button {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  border: 2px solid transparent;
}

.categories button.selected {
  border: 2px solid white;
}

.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  overflow-y: auto;
}

.menuItem {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  position: relative;

  padding: 1.5rem;
  padding-left: 2rem;
  background-color: var(--surface-color);
  border-radius: var(--radius);
}

.menuItem:hover {
  filter: brightness(130%);
}

.stripe {
  position: absolute;
  top: 1rem;
  left: 1rem;

  height: calc(100% - 2rem);
  width: 0.5rem;
  border-radius: var(--radius);
}

.exit {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #00000045;
  font-size: 5rem;
  color: white;
}

.exit span {
  background-color: black;
  border-radius: 0.8rem;
  padding: 2rem;

  animation: 1s ease-in-out infinite alternate exit;
}

@keyframes exit {
  0% {
    scale: 1;
  }
  100% {
    scale: 1.1;
  }
}
</style>

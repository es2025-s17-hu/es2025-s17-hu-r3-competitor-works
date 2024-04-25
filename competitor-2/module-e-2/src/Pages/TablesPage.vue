<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const tables = ref([]);

async function open(table) {
  if (!table.hasOpenOrder) {
    const response = await fetch(
      "https://module-c-2-solution.dineease.com/api/v1/orders",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tableId: table.id,
        }),
      }
    );
  }

  router.push("/order/" + table.id);
}

const mapWidth = computed(() => {
  return tables.value.reduce(
    (max, current) =>
      current.x + current.width > max ? current.x + current.width : max,
    0
  );
});

const mapHeight = computed(() => {
  return tables.value.reduce(
    (max, current) =>
      current.y + current.height > max ? current.y + current.height : max,
    0
  );
});

onMounted(async () => {
  const response = await fetch(
    "https://module-c-2-solution.dineease.com/api/v1/tables",
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }
  );
  const data = await response.json();
  tables.value = data;
});
</script>

<template>
  <div class="tables">
    <h1>Select a Table</h1>
    <div
      class="map"
      :style="{
        width: mapWidth + 'px',
        height: mapHeight + 'px',
      }"
    >
      <div
        class="table"
        v-for="t in tables"
        :key="t.id"
        :style="{
          width: t.width + 'px',
          height: t.height + 'px',
          left: t.x + 'px',
          top: t.y + 'px',
        }"
        :class="{ open: t.hasOpenOrder }"
        @click="open(t)"
      >
        {{ t.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.tables {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: 100vh;
  margin: auto;
  padding: 2rem;
}

.map {
  position: relative;
  width: 100%;
  height: 100%;
}

.table {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-1);
  border-radius: var(--radius);
  color: white;
  position: absolute;
}

.table.open {
  background-color: var(--color-5);
}
</style>

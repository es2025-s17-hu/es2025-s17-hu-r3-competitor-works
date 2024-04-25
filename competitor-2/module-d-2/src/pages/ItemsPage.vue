<script setup>
import { computed } from "vue";

import { watch } from "vue";

import { onMounted } from "vue";

    import Navbar from "../components/Navbar.vue";
    import { RouterLink } from "vue-router";

    import { ref } from "vue";

    const category = ref(null);
    const categories = ref(null);

    const items = ref(null);

    const EditedItem = ref({
        name: "",
        price: 0,
        type: "FOOD",
        menuCategoryId: 1
    });
    const modalOpen = ref(false);

    const filteredItems = computed(() => {
        return items.value.filter(x => x.menuCategoryId == category.value);
    });

    function OpenModal(item) {
        EditedItem.value = item;
        modalOpen.value = true;
    }

    async function Save() {
        const response = await fetch("https://module-c-2-solution.dineease.com/api/v1/menuItems/" + EditedItem.value.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                name: EditedItem.value.name,
                type: EditedItem.value.type,
                menuCategoryId: EditedItem.value.menuCategoryId,
                price: EditedItem.value.price
            }),
        });

        const data = await response.json();
        items.value.splice(items.value.indexOf(EditedItem.value), 1, data);
    }

    onMounted(async () => {
         let response = await fetch("https://module-c-2-solution.dineease.com/api/v1/menuCategories", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            categories.value = data;
            category.value = data[0].id;
        }

        response = await fetch("https://module-c-2-solution.dineease.com/api/v1/menuItems", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            items.value = data;
        }
    });
</script>

<template>
    <navbar dashboard="false"/>
    <div class="menu">
        <h1>Menu Items</h1>
        <select v-if="categories != null" v-model="category">
            <option :value="c.id" v-for="c in categories" :key="c.id">{{c.name}}</option>
        </select>
        <table v-if="items">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in filteredItems" :key="i.id" @click="OpenModal(i)">
                    <td>{{i.name}}</td>
                    <td>{{ i.type }}</td>
                    <td>{{ i.price }} Ft</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="modal-backdrop" v-show="modalOpen">
        <div class="modal">
            <h2>Edit Menu Item</h2>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="EditedItem.name">
            <label for="price">Price</label>
            <input type="number" id="price" v-model="EditedItem.price">
            <label for="type">Type</label>
            <select id="type" v-model="EditedItem.type">
                <option value="FOOD">FOOD</option>
                <option value="DRINK">DRINK</option>
                <option value="OTHER">OTHER</option>
            </select>
            <label for="category">Category</label>
            <select v-if="categories != null" v-model="EditedItem.menuCategoryId" id="category">
                <option :value="c.id" v-for="c in categories" :key="c.id">{{c.name}}</option>
            </select>
            <div class="buttons">
                <button class="button" @click="Save()">Save</button>
                <button class="button">Delete</button>
                <button class="button" @click="modalOpen = false">Cancel</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        min-height: calc(100vh - 68px);
        overflow-y: hidden;
    }

    table {
        max-width: 800px;
        width: 100%;
        border-collapse: collapse;

        overflow-y: scroll;
    }

    td, th {
        border: 2px solid gray;
    }

    td:nth-child(2) {
        text-align: center;
    }

    td:nth-child(3) {
        text-align: end;
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #0000003d;
    }

    .modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        padding: 1rem;

        background-color: white;
        border: 1px solid black;
    }

     label, input {
        width: 100%;
    }

    input, select {
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
    }

    .buttons {
        display: flex;
        gap: 1rem;
    }
</style>
<script setup>
    import Navbar from "../components/Navbar.vue";
    import { RouterLink } from "vue-router";
</script>

<template>
    <navbar dashboard="true"/>
    <div class="dashboard">
        <h1>Admin Dashboard</h1>
        <div class="grid">
            <router-link to="/categories">Menu Categories</router-link>
            <router-link to="/items">Menu Items</router-link>
            <router-link class="disabled" to="">Tables</router-link>
            <router-link class="disabled" to="">Users</router-link>
            <router-link class="disabled" to="">Statistics</router-link>
            <router-link class="disabled" to="">Preferences</router-link>
        </div>
    </div>
</template>

<style scoped>
    .dashboard {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        height: calc(100vh - 68px);
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    a {
        text-align: center;
        text-decoration: none;
        color: unset;

        font-weight: bold;
        font-size: 1.3rem;

        background-color: lightgray;
        padding: 2rem 3rem;
        border-radius: var(--radius);
    }

    a.disabled {
        opacity: 50%;
        pointer-events: none;
        
    }
</style>
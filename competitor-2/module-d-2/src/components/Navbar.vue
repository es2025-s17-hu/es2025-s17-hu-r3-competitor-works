<script setup>
    import { defineProps } from "vue";
    import { RouterLink } from "vue-router";
    import Logo from "./Logo.vue";

    const props = defineProps(["dashboard"]);

    async function Logout() {
        const response = await fetch("https://module-c-2-solution.dineease.com/api/v1/logout", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        });

        localStorage.removeItem("token");
        window.location = "/login";
    }
</script>

<template>
    <header>
        <logo/>
        <router-link to="/" class="button" v-if="!dashboard">Back to Dashboard</router-link>
        <button class="button" @click="Logout">Log out</button>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        align-items: stretch;
        gap: 1rem;

        padding: 1rem 2rem;
    }

    .button:last-child {
        margin-left: auto;
    }
</style>
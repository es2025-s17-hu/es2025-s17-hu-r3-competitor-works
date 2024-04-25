<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
    <header>
        <router-link to="/"><img src="/img/logo.svg" alt="DineEase logo"></router-link>
        <nav>
            <a href="/#hero">Overview</a>
            <a href="/#features">Features</a>
            <a href="/#reviews">About Us</a>
            <a href="/#plans">Pricing</a>
        </nav>
        <router-link to="booking" class="button gradient">Book a demo</router-link>
    </header>
</template>
    
<style scoped>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        position: sticky;
        top: 0;
        background-color: white;
        z-index: 10;

        padding: 2rem 8rem;
    }

    nav {
        display: flex;
        gap: 1rem;
    }

    .button {
        display: none;
    }

    @media screen and (min-width: 768px) {
        nav {
            flex-grow: 1;
        }

        .button {
            display: block;
        }
    }
</style>
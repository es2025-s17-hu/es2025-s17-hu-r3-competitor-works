<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
    <div id="hero">
        <h1>Elevate Your Restaurant with</h1>
        <h1 class="gradient">DineEase</h1>
        <p>Streamline operations, enhance customer service, and boost your profits with our comprehensive management software.</p>
        <router-link to="/booking" class="button gradient">Book a Free Demo</router-link>
        <div class="image"></div>
    </div>
</template>
    
<style scoped>
    #hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        position: relative;

        padding: 6rem;
        padding-bottom: 0;
    }

    .image {
        width: 100%;
        aspect-ratio: 2 / 1;

        background-image: url("/img/hero.png");
        background-repeat: no-repeat;
        background-position: center top;
    }

    .button {
        padding: 1rem 2rem;
    } 

    @media screen and (min-width: 768px) {
        #hero {
            align-items: flex-start;
            padding-bottom: 6rem;

            padding-right: 331px;
        }

        .image {
            position: absolute;
            top: 6rem;
            right: 0;
            z-index: -1;

            background-position: right top;
        }
    }
</style>
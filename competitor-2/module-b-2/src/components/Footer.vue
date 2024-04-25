<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
    <footer>
        <div class="left">
            <img src="/img/logo.svg" alt="DineEase logo"><br>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy policy</a>
            <br>
            <a href="tel:+36 30 123 4567">+36 30 123 4567</a>
            <a href="mailto:support@dineease.com">support@dineease.com</a>
            <br>
            <p>© 2024 - All rights reserved</p>
        </div>
        <div class="right">
            <h4>Follow Us</h4>
            <div class="icons">
                <img src="/img/facebook.svg" alt="Facebook">
                <img src="/img/instagram.svg" alt="Instagram">
            </div>
            
        </div>
    </footer>
</template>
    
<style scoped>
    footer {
        background-color: black;
        color: white;

        padding: 4rem;

        display: flex;
        justify-content: space-between;
    }

    .left, .right {
        line-height: 2em;
    }

    a {
        margin-right: 3rem;
    }

    .left img {
        width: 48px;
    }

    .left p {
        opacity: 75%;
    }

    .right {
        margin-right: 200px;
    }

    .icons {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }
</style>
<script setup>
    import Logo from "../components/Logo.vue";
    import {ref} from "vue"

    const username = ref();
    const password = ref();

    async function Login() {
        const response = await fetch("https://module-c-2-solution.dineease.com/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            window.location = "/";
        }
    }
</script>

<template>
    <div class="login">
        <logo/>
            <div class="container">
                <h1>Log In</h1>
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username">
                <label for="password">Password</label>
                <input type="text" id="password" v-model="password">
                <button class="button" @click="Login">Log In</button>
            </div>
    </div>
</template>

<style scoped>
    .login {
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        width: 400px;

        padding: 1rem;
        border: 1px solid gray;
        border-radius: var(--radius);
    }

    label, input {
        width: 100%;
    }

    input {
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
    }
</style>
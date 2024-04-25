<script setup>
import { ref } from "vue";

const numbers = ref("");
const error = ref(null);

async function Press(num) {
  numbers.value += num;
  error.value = null;

  if (numbers.value.length == 4) {
    const response = await fetch(
      "https://module-c-2-solution.dineease.com/api/v1/login/pin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pin: numbers.value,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("token", data.token);
      window.location = "/tables";
    } else {
      error.value = "Incorrect PIN. Try again!";
      numbers.value = "";
    }
  }
}

function Clear() {
  numbers.value = [];
}
</script>

<template>
  <div class="login">
    <h1>Enter Your PIN</h1>
    <div class="display">{{ "*".repeat(numbers.length) }}</div>
    <p class="error">{{ error }}</p>
    <div class="buttons">
      <button @click="Press(0)">0</button>
      <button @click="Clear()">Clear</button>
      <button v-for="n in 9" :key="n" @click="Press(n)">{{ n }}</button>
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  height: calc(100vh - 4rem);
  max-width: 380px;
  margin: auto;
  margin-top: 4rem;
}

.display {
  display: block;
  font-size: 4rem;
  height: 4rem;

  color: gold;
  letter-spacing: 1rem;
  text-align: center;
  width: 16rem;
  border-bottom: 1px solid white;
}

.error {
  height: 1lh;
  color: red;
  font-size: 1.2rem;
  font-weight: bold;
}

.buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-flow: row wrap-reverse;
  gap: 2rem;
}

button {
  flex-basis: calc(100% / 3 - 2rem);

  text-align: center;
  aspect-ratio: 1;
  padding: 0;

  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: var(--color-1);
  border-radius: var(--radius);
}

button:nth-of-type(1) {
  flex-basis: calc(100% / 3 * 2 - 2rem);
  aspect-ratio: 2 / 1;
}
</style>

<script setup>

</script>

<template>
  <main>
    <h2 class="sub-title text-center">Enter Your PIN</h2>
    <hr>
    <div class="pin-container">
      <span v-for="char in pin.length">*</span>
    </div>
    <!--  Password grid  -->
    <div class="password-grid-container">
      <div @click="clickGrid(7)" class="password-grid">7</div>
      <div @click="clickGrid(8)" class="password-grid">8</div>
      <div @click="clickGrid(9)" class="password-grid">9</div>
      <div @click="clickGrid(4)" class="password-grid">4</div>
      <div @click="clickGrid(5)" class="password-grid">5</div>
      <div @click="clickGrid(6)" class="password-grid">6</div>
      <div @click="clickGrid(1)" class="password-grid">1</div>
      <div @click="clickGrid(2)" class="password-grid">2</div>
      <div @click="clickGrid(3)" class="password-grid">3</div>
      <div @click="clickGrid(0)" class="password-grid">0</div>
      <div class="password-grid" @click="pin = ''; pinError = ''">Clear</div>
    </div>
    <p class="pin-error-text text-center">{{ pinError }}</p>
  </main>
</template>

<script>
export default {
  name: "LoginPage",
  props: ["baseUrl"],
  emits: ["changePage"],
  data() {
    return {
      pin: "",
      pinError: "",
    }
  },
  methods: {
    clickGrid(num) {
      if (this.pin.length >= 4) return;
      this.pin += num.toString();
      if (this.pin.length >= 4) {
        this.login();
      }
    },
    /**
     * Login
     */
    login() {
      fetch(this.baseUrl + '/login/pin', {
        method: "POST",
        body: JSON.stringify({
          pin: this.pin
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => response.text()).then(data => {
        if (data == 'Unauthorized') {
          this.pinError = "Incorrect PIN. Try again!";
          this.pin = "";
        } else {
          data = JSON.parse(data);
          localStorage.setItem("token", data.token);
          this.$emit("changePage", 'table-select');
        }
      })
    }
  }
}
</script>

<style scoped>
  main {
    border: 1px solid white;
    width: 100%;
    padding: 10px 10px 50px;
    height: 670px;
  }

  .password-grid-container {
    width: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 20px;
    height: 300px;
    padding: 30px;
  }

  .password-grid {
    background-color: purple;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
  }

  .pin-container {
    width: 20%;
    height: 80px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 36px;
    border-bottom: 1px solid gray;
    color: orange;
  }

  .pin-error-text {
    font-size: 24px;
    color: red;
  }
</style>
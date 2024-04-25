<script setup>

</script>

<template>
  <main style="padding-bottom: 90px;">
    <div class="container small-container">
      <h2 class="text-center" style="font-size: 52px">Book a Free <span class="special-text">Demo</span></h2>
      <div class="row md-row" style="margin-top: 100px;">
        <div class="row flex-column">
          <p class="little-text">Date</p>
          <div class="date-container">
            <div class="row justify-between">
              <span>24 / 04 / 2024</span>
              <img src="../assets/images/calendar.svg" alt="calendar icon">
            </div>
            <div class="row justify-between">
              <span class="text-dark"><</span>
              <span class="text-dark">April 2024</span>
              <span class="text-dark">></span>
            </div>
            <div class="date-grid-container">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
              <span :class="chooseClass(i)" :style="{
                cursor: 'pointer',
              }" v-for="i in 31" @click="chooseNumber = i">{{ i }}</span>
            </div>
          </div>
          <p class="little-text">Time</p>
          <div :class="timeIntervalClass(timeInterval)" v-for="timeInterval in timeIntervals" @click="timeInterval.check = !timeInterval.check">{{ timeInterval.time }}</div>
        </div>
        <div class="row flex-column">
          <p class="little-text">Name</p>
          <input type="text" class="form-text" placeholder="John Doe">
          <p class="little-text">Phone number</p>
          <input type="text" class="form-text" placeholder="+1 23 547 4345">
          <p class="little-text">Email address</p>
          <input type="text" class="form-text" placeholder="john.doe@citydiner.com">
          <button class="special-btn">Book Demo</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "DemoPage",
  data() {
    return {
      timeIntervals: [
        {
          time: "12:00",
          check: false,
        },
        {
          time: "12:30",
          check: false,
        },
        {
          time: "13:30",
          check: false,
        },
        {
          time: "14:00",
          check: false,
        },
      ],
      chooseNumber: 0,
    }
  },
  methods: {
    timeIntervalClass(timeInterval) {
      let classArray = ["time-interval-bar"];
      if (timeInterval.check) classArray.push("selected");
      return classArray.join(" ");
    },
    chooseClass(i) {
      if (i === this.chooseNumber) {
        return "choose";
      }
      return "";
    }
  },
}
</script>

<style scoped>
  .small-container {
    max-width: 744px;
  }

  .special-text {
    background: #804aea;
    background-clip: text;
    color: transparent;
    font-weight: bold;
  }

  .little-text {
    color: gray;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .date-container {
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 5px;
    color: gray;
  }

  .time-interval-bar {
    width: 100%;
    padding: 5px;
    text-align: center;
    background-color: #bbabe0;
    cursor: pointer;
    border-radius: 10px;
    transition: .3s linear;
  }

  .time-interval-bar.selected {
    background-color: #804aea;
    color: white;
  }

  .text-dark {
    color: black;
  }

  .date-grid-container {
    width: 100%;
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
  }

  .date-grid-container > * {
    text-align: center;
  }

  .special-btn {
    border-radius: 10px;
    border: none;
    padding: 15px 10px;
    width: 100%;
    color: white;
    background-color: #804aea;
    cursor: pointer;
  }

  .form-text {
    border: 1px solid lightgray;
    padding: 10px;
    width: 100%;
    border-radius: 3px;
    font-size: 16px;
  }

  .choose {
    border-radius: 50%;
    background: linear-gradient(45deg, darkred, blue);
    color: white;
  }

  @media (max-width: 768px) {
    .md-row {
      flex-direction: column;
    }
    .small-container {
      max-width: 550px;
    }
  }
</style>
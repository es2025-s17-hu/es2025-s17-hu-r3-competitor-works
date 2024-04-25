<script setup>

</script>

<template>
  <main>
    <!--    Hero    -->
    <section id="hero-section">
      <div class="container">
        <div class="row">
          <div class="hero-information">
            <h2 class="hero-title">Elevate Your Restaurant with <span class="dineease-text">DineEase</span></h2>
            <p class="hero-description">Streamline operations, enhance customer service, and boost your profits with our comprehensive management software.</p>
          </div>
          <div class="hero-phone">
            <img src="../assets/images/hero.svg" alt="hero image">
          </div>
        </div>
        <button class="btn big-btn" style="margin-top: 80px;" @click="changeToOtherPage('Demo')">
          &phone;
          Book a Free Demo
        </button>
      </div>
    </section>
    <!--    Statistics    -->
    <section id="statistics-section">
      <div class="container">
        <h2 class="sub-title text-center statistics-title">DineEase by the Numbers</h2>
        <p class="sub-description text-center statistics-description">Our achievement in the journey depicted in numbers</p>
        <div class="statistics-container">
          <div class="statistics-card">
            <h3 class="statistics-card-title">{{ formatNumbers(counts[0]) }}+</h3>
            <p class="statistics-card-description">Customers</p>
          </div>
          <div class="statistics-card">
            <h3 class="statistics-card-title">{{ formatNumbers(counts[1]) }}+</h3>
            <p class="statistics-card-description">Transactions monthly</p>
          </div>
          <div class="statistics-card">
            <h3 class="statistics-card-title">{{ formatNumbers(counts[2]) }}%</h3>
            <p class="statistics-card-description">Customer Satisfaction</p>
          </div>
          <div class="statistics-card">
            <h3 class="statistics-card-title">{{ formatNumbers(counts[3]) }}+</h3>
            <p class="statistics-card-description">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
    <!--    Features    -->
    <section id="features-section">
      <div class="container">
        <h2 class="sub-title">Powerful Features Designed for Efficiency</h2>
        <div class="row feature-card-container" style="margin-top: 50px;">
          <div class="feature-card">
            <img src="../assets/images/feature1.svg" alt="feature 1 icon" class="feature-image">
            <h3 class="feature-title">Inventory Management</h3>
            <p class="feature-description">Reduce waste with precise tracking and predictive ordering.</p>
            <a href="#" class="feature-link">Know more &rightarrow;</a>
          </div>
          <div class="feature-card">
            <img src="../assets/images/feature2.svg" alt="feature 2 icon" class="feature-image">
            <h3 class="feature-title">Real-Time Analytics</h3>
            <p class="feature-description">Make informed decisions with up-to-the-minute data on sales, staffing, and customer preferences.</p>
            <a href="#" class="feature-link">Know more &rightarrow;</a>
          </div>
          <div class="feature-card">
            <img src="../assets/images/feature3.svg" alt="feature 3 icon" class="feature-image">
            <h3 class="feature-title">CRM</h3>
            <p class="feature-description">Enhance guest experiences through personalized service and targeted marketing.</p>
            <a href="#" class="feature-link">Know more &rightarrow;</a>
          </div>
        </div>
      </div>
    </section>
    <!--    Testimonials    -->
    <section id="testimonials-section">
      <div class="container small-container">
        <div class="row testimonials-split-two">
          <div class="row relative flex-column special-column">
            <img src="../assets/images/quote.svg" alt="quote" class="quote">
            <h2 class="sub-title" style="z-index: 1; position: relative">Trusted by Restaurants Worldwide</h2>
            <div class="testimonial-card special-card">
              <p class="testimonial-description">
                DineEase revolutionized our operations, making it easy to manage multiple locations seamlessly. Their support team is incredibly responsive and truly understands the needs of the hospitality industry.
                <img src="../assets/images/quote.svg" alt="testimonial quote" class="testimonial-quote">
              </p>
              <h3 class="testimonial-name">Floyd Miles</h3>
              <p class="testimonial-title">OceanView Cafe</p>
            </div>
          </div>
          <div class="row flex-column testimonials-split-column">
            <div class="testimonial-card">
              <p class="testimonial-description">
                DineEase helped us reduce operational costs by 20% within the first six months.
                <img src="../assets/images/quote.svg" alt="testimonial quote" class="testimonial-quote">
              </p>
              <h3 class="testimonial-name">Jane Cooper</h3>
              <p class="testimonial-title">The Gourmet Bistro</p>
            </div>
            <div class="testimonial-card special-card">
              <p class="testimonial-description">
                Our customer satisfaction has never been higher, thanks to the personalized service we can provide with DineEase.
                <img src="../assets/images/quote.svg" alt="testimonial quote" class="testimonial-quote">
              </p>
              <h3 class="testimonial-name">Kristin Watson</h3>
              <p class="testimonial-title">City Diner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    Pricing Plans    -->
    <section id="pricing-plans">
      <div class="container">
        <h2 class="sub-title text-center">Flexible Pricing Plans</h2>
        <p class="sub-description text-center pricing-description">Choose the plan that best fits your business. No hidden fees, no surprises.</p>
        <div class="pricing-card-container">
          <div class="pricing-card">
            <div class="pricing-box">
              <p class="text-center">STARTER</p>
              <p class="text-center">$19 per month</p>
              <p class="text-center">Ideal for new or small restaurants looking to streamline operations.</p>
            </div>
            <div class="pricing-information">
              <p class="checked">Real-time sales tracking</p>
              <p class="checked">Basic inventory management</p>
              <p>Priority phone support</p>
              <p>Multi-location management</p>
              <div class="text-center">
                <button class="pricing-button">Start Free Trail</button>
              </div>
            </div>
          </div>
          <div class="pricing-card">
            <div class="pricing-box">
              <p class="text-center">Professional</p>
              <p class="text-center">$49 per month</p>
              <p class="text-center">Perfect for growing restaurants needing advanced analytics and marketing tools.</p>
            </div>
            <div class="pricing-information">
              <p class="checked">Real-time sales tracking</p>
              <p class="checked">Advanced inventory management</p>
              <p class="checked">Priority phone support</p>
              <p>Multi-location management</p>
              <div class="text-center">
                <button class="pricing-button">Start Free Trail</button>
              </div>
            </div>
          </div>
          <div class="pricing-card">
            <div class="pricing-box">
              <p class="text-center">ENTERPRISE</p>
              <p class="text-center">$99 per month</p>
              <p class="text-center">Comprehensive solutions for large-scale or multi-location operations.</p>
            </div>
            <div class="pricing-information">
              <p class="checked">Real-time sales tracking</p>
              <p class="checked">Advanced inventory management</p>
              <p class="checked">Priority phone support</p>
              <p class="checked">Multi-location management</p>
              <div class="text-center">
                <button class="pricing-button">Start Free Trail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomePage",
  emits: ["changePage"],
  data() {
    return {
      numbers: [2531, 1235764, 98, 25],
      counts: [0, 0, 0, 0],
    }
  },
  methods: {
    formatNumbers(number) {
      let str = number.toString();
      let count = 0;
      let output = [];
      str.split("").reverse().forEach(char => {
        output.push(char);
        if (++count === 3) output.push(",");
      });
      if (str.length % 3 === 0) output.pop();
      return output.reverse().join("");
    },
    changeToOtherPage(page) {
      console.log(page);
      this.$emit('changePage', page);
    },
  },
  mounted() {
    let interval1 = setInterval(() => {
      this.counts[0] += Math.ceil(this.numbers[0] / 50);
      if (this.counts[0] >= this.numbers[0]) {
        this.counts[0] = this.numbers[0];
        clearInterval(interval1);
      }
    }, 10);
    let interval2 = setInterval(() => {
      this.counts[1] += Math.ceil(this.numbers[1] / 50);
      if (this.counts[1] >= this.numbers[1]) {
        this.counts[1] = this.numbers[1];
        clearInterval(interval2);
      }
    }, 10);
    let interval3 = setInterval(() => {
      this.counts[2] += Math.ceil(this.numbers[2] / 50);
      if (this.counts[2] >= this.numbers[2]) {
        this.counts[2] = this.numbers[2];
        clearInterval(interval3);
      }
    }, 10);
    let interval4 = setInterval(() => {
      this.counts[3] += Math.ceil(this.numbers[3] / 50);
      if (this.counts[3] >= this.numbers[3]) {
        this.counts[3] = this.numbers[3];
        clearInterval(interval4);
      }
    }, 10);
  },
}
</script>

<style scoped>
#hero-section {
  padding-bottom: 90px;
}
 .hero-title {
   font-size: 72px;
   font-weight: normal;
   margin-top: 0;
   margin-bottom: 0;
 }

 .hero-description {
   font-size: 20px;
 }

 .hero-phone {
   height: 2px;
 }

 .hero-phone > img {
   position: relative;
   top: 160px;
   z-index: -1;
 }

 .dineease-text {
   background: linear-gradient(90deg, #fb255a, #804aea);
   background-clip: text;
   color: transparent;
   font-weight: bold;
 }

 #statistics-section {
   padding: 100px 0;
   background-color: #976de6;
   color: white;
 }

 .statistics-title {
   margin-bottom: 0;
 }

 .statistics-description {
   margin-top: 20px;
 }

 .statistics-container {
   width: 100%;
   display: flex;
   gap: 30px;
   margin-top: 40px;
 }

 .statistics-card {
   width: 100%;
   background-color: #6926d7;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 50px 0;
   border-radius: 10px;
 }

 .statistics-card > * {
   margin-top: 0;
   margin-bottom: 0;
 }

 .statistics-card-title {
   font-size: 40px;
   font-weight: bold;
 }

  #features-section {
    padding: 100px 0;
  }

  .feature-card {
    width: 100%;
    opacity: 0;
    animation: feature-show 1s linear forwards;
  }

  @keyframes feature-show {
    0% {
      opacity: 0;
      transform: scale(2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .feature-card:nth-child(1) {
    animation-delay: .5s;
  }

  .feature-card:nth-child(2) {
    animation-delay: 1s;
  }

  .feature-card:nth-child(3) {
    animation-delay: 1.5s;
  }

  .feature-title {
    font-size: 28px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .feature-description {
    margin-top: 0;
  }

  .feature-link {
    color: black;
    font-weight: bold;
  }

  #testimonials-section {
    padding: 110px 0;
    background-color: #d5fafc;
  }

  .small-container {
    max-width: 1024px;
  }

  .quote {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: .2;
    transform: translate(-80%, -20%);
  }

  .testimonial-card {
    padding: 40px 40px 35px 60px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 2px gray;
    position: relative;
  }

  .testimonial-name, .testimonial-description, .testimonial-title {
    margin-top: 0;
    margin-bottom: 0;
  }

  .testimonial-description {
    position: relative;
  }

  .testimonial-name {
    margin-top: 30px;
  }

  .testimonial-title {
    color: gray;
  }

  .testimonial-quote {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-150%, -20%);
  }

  .testimonials-split-two {
    gap: 32px;
  }

  .testimonials-split-column {
    gap: 40px;
  }

  .special-card {
    width: 80%;
  }

  .special-column {
    align-items: flex-end;
  }

  .pricing-description {
    color: gray;
  }

  .pricing-card-container {
    margin-top: 114px;
    display: flex;
    gap: 30px;
  }

  .pricing-card {
    width: 100%;
    cursor: pointer;
  }

  .pricing-box {
    padding: 40px 50px;
    border: 1px solid lightgray;
    border-radius: 10px;
    background: white;
    transition: .5s linear;
  }

  .pricing-card:hover .pricing-box {
    background: linear-gradient(-45deg, red, blue);
    color: white;
  }

  .pricing-card:hover .pricing-button {
    background: linear-gradient(-45deg, red, blue);
    background-clip: text;
    color: transparent;
  }

  .pricing-information {
    padding: 40px 50px;
  }

  p.checked {
    position: relative;
    color: black;
  }
  p.checked::before {
    content: "✓";
    position: absolute;
    color: green;
    top: 0;
    left: 0;
    transform: translate(-100%, 0%);
  }

  .pricing-information {
    color: gray;
  }

  .pricing-button {
    border-radius: 50px;
    padding: 10px 20px;
    border: 1px solid lightgray;
    transition: .3s linear ;
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    .container {
      max-width: 718px;
    }
    .feature-card-container {
      flex-direction: column;
      gap: 30px;
    }
    .pricing-card-container {
      flex-direction: column;
      gap: 30px;
    }
  }
</style>
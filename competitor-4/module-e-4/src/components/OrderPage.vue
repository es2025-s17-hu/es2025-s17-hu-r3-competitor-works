<script setup>

</script>

<template>
  <main>
    <div class="row" style="height: 100%; gap: 0" v-if="chooseTable">
      <div class="left-container">
        <!--   Table Information     -->
        <div class="row p-4" style="align-items: center;">
          <img src="../assets/table-logo.png" alt="Table logo" class="table-logo">
          <span class="table-title">{{ chooseTable.name }}</span>
        </div>
        <hr>
        <!--    Order Item Section    -->
        <div class="order-item-container">
          <div class="order-item row" v-for="orderItem in sortOrderItems">
            <span class="order-item-quantity">{{ orderItem.quantity }}</span>
            <span class="order-item-name">{{ findItem(orderItem).name }}</span>
          </div>
        </div>
        <!--    Sum Section    -->
        <div class="row justify-between p-4" style="font-size: 24px">
          <span>Sum:</span>
          <span>{{ totalRevenue }} Ft</span>
        </div>
        <hr style="margin-top: 0;">
        <!--    Function Button Section    -->
        <div class="row p-4" style="padding-top: 0;">
          <button class="btn" type="button" style="background-color: purple; color: white;" @click="exit()">Exit</button>
          <button class="btn" type="button" style="background-color: tomato; color: white;" @click="close()">Close Order</button>
        </div>
      </div>
      <div class="right-container">
        <!--    Category Section    -->
        <div class="category-container">
          <div class="category" :style="categoryStyle(category)" v-for="category in categories" @click="clickCategory(category)">{{ category.name }}</div>
        </div>
        <!--    Menu Item Section    -->
        <div class="menu-item-container">
          <div class="menuItem" :style="menuItemStyle()" v-for="menuItem in filterItems" @click="clickMenuItem(menuItem)">
            <span>{{ menuItem.name }}</span>
            <span>{{ menuItem.price }} Ft</span>
          </div>
        </div>
      </div>
    </div>
    <!--    Print bill overlay    -->
    <Transition name="fade">
      <div class="print-bill-overlay" v-if="overlay">
        <div class="text-container">
          <span>P</span>
          <span>r</span>
          <span>i</span>
          <span>n</span>
          <span>t</span>
          <span>i</span>
          <span>n</span>
          <span>g b</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span class="bounce-text" :style="textAnimationStyle(0.1)">.</span>
          <span class="bounce-text" :style="textAnimationStyle(0.2)">.</span>
          <span class="bounce-text" :style="textAnimationStyle(0.3)">.</span>
        </div>
        <div class="clock">
          <div class="clock-hour"></div>
        </div>
      </div>
    </Transition>
  </main>
</template>

<script>
export default {
  name: "OrderPage",
  props: ["baseUrl", "chooseTable"],
  data() {
    return {
      orderItems: [],
      categories: [],
      menuItems: [],
      sortOrderItems: [],
      chooseCategory: null,
      order: null,
      overlay: false,
    }
  },
  computed: {
    filterItems() {
      if (this.chooseCategory === null) return [];
      return this.menuItems.filter(item => item.menuCategoryId == this.chooseCategory.id);
    },
    totalRevenue() {
      return this.orderItems.reduce((total, orderItem) => {
        return total + this.findItem(orderItem).price * orderItem.quantity;
      }, 0)
    },
  },
  methods: {
    sortItems() {
      let items = [];
      this.orderItems.forEach(orderItem => {
        let findOneItem = items.find(item => item.menuItemId === orderItem.menuItemId);
        if (findOneItem) {
          findOneItem.quantity = parseInt(findOneItem.quantity) + 1;
        } else {
          items.push(orderItem);
        }
      })
      this.sortOrderItems = items;
    },
    findItem(orderItem) {
      return this.menuItems.find(menuItem => menuItem.id == orderItem.menuItemId);
    },
    checkOrder() {
      if (this.chooseTable.hasOpenOrder) {
        this.getOpenOrder();
      } else {
        fetch(this.baseUrl + '/orders', {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            tableId: this.chooseTable.id,
          }),
        }).then(response => response.json()).then(data => {
          this.getOpenOrder();
        });
      }
    },
    getOpenOrder() {
      fetch(this.baseUrl + '/orders/tables/' + this.chooseTable.id, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
        method: "GET",
      }).then(response => response.json()).then(data => {
        this.orderItems = data.OrderItems;
        this.orderItems.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        this.sortItems();
        this.order = data;
      });
    },
    getCategories() {
      fetch(this.baseUrl + '/menuCategories', {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
        }
      }).then(response => response.json()).then(data => {
        this.categories = data;
        this.categories.forEach(category => {
          category.backgroundColor = `rgb(${Math.floor(Math.random() * 255 / 2 + 20)},${Math.floor(Math.random() * 255 / 2 + 20)},${Math.floor(Math.random() * 255 / 2 + 20)})`;
        })
      });
    },
    categoryStyle(category) {
      return {
        backgroundColor: category.backgroundColor,
      }
    },
    clickCategory(category) {
      this.chooseCategory = category;
    },
    getMenuItems() {
      fetch(this.baseUrl + '/menuItems', {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
        }
      }).then(response => response.json()).then(data => {
        this.menuItems = data;
      });
    },
    menuItemStyle() {
      return {
        borderLeft: `10px solid ${this.chooseCategory.backgroundColor}`,
      }
    },
    clickMenuItem(menuItem) {
      fetch(this.baseUrl + '/orderItems', {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          orderId: this.order.id,
          menuItemId: menuItem.id,
          quantity: 1,
        }),
      }).then(response => response.json()).then(data => {
        this.getOpenOrder();
      });
    },
    exit() {
      this.$emit("changePage", 'table-select');
    },
    close() {
      this.overlay = true;
      fetch(this.baseUrl + '/orders/tables/' + this.chooseTable.id + '/close', {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
        method: "PUT",
      }).then(response => response.json()).then(data => {

      });
      setTimeout(() => {
        this.overlay = false;
        this.$emit("changePage", "table-select");
      }, 5000);
    },
    textAnimationStyle(delay) {
      return {
        animationDelay: `${delay}s`
      }
    }
  },
  mounted() {
    if (this.chooseTable == null) {
      this.$emit("changePage", 'login')
    } else {
      this.getCategories();
      this.getMenuItems();
      this.checkOrder();
    }
  }
}
</script>

<style scoped>
  main {
    width: 100%;
    height: 800px;
  }

  .left-container {
    width: 360px;
    height: 100%;
  }

  .right-container {
    width: calc(100% - 360px);
    height: 100%;
  }

  .table-logo {
    width: 38px;
    height: auto;
  }

  .table-title {
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
  }

  .order-item-container {
    height: 600px;
    overflow-y: auto;
  }

  .btn {
    width: 100%;
    padding: 15px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
  }

  .btn:hover {
    filter: brightness(1.2);
  }

  .p-4 {
    padding: 10px;
  }

  .category-container {
    height: 280px;
    width: 100%;
    overflow-y: auto;
    border: 1px solid white;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 10px;
  }

  .category {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
  }

  .menu-item-container {
    width: 100%;
    height: calc(800px - 280px);
    overflow-y: auto;
    border: 1px solid white;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 20px;
    padding: 10px;
  }

  .menuItem {
    height: 100px;
    width: 280px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: dimgray;
    border-radius: 10px;
  }

  .order-item {
    width: 100%;
    padding: 20px;
  }

  .order-item-quantity {
    background-color: gray;
    border-radius: 50px;
    width: 48px;
    display: flex;
    justify-content: center;
  }

  .print-bill-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    width: 100%;
    height: 100%;
    font-size: 24px;
  }

  .bounce-text {
    animation: bounce 1s linear infinite;
    display: inline-block;
  }

  @keyframes bounce {
    from {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-20%);
    }
    to {
      transform: translateY(0%);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: .5s linear;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .clock {
    width: 100px;
    height: 100px;
    margin-top: 10px;
    background-color: black;
    border: 5px solid white;
    border-radius: 50%;
    position: relative;
  }

  .clock-hour {
    width: 40px;
    height: 6px;
    background-color: white;
    position: absolute;
    transform-origin: left center;
    animation: rotate 1s linear infinite;
    top: calc(50% - 3px);
    left: 50%;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .clock::before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
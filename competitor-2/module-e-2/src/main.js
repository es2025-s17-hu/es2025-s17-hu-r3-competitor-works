import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from) => {
  if (to.path == "/") {
    return "/tables";
  }

  const token = sessionStorage.getItem("token");
  if (to.path != "/login" && !token) {
    return "/login";
  }
});

const app = createApp(App);
app.use(router);
app.mount("#app");

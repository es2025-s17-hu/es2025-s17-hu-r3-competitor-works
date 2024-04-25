import LoginPage from "./pages/LoginPage.vue";
import DashPage from "./pages/DashPage.vue";
import ItemsPage from "./pages/ItemsPage.vue";

const routes = [
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/",
    component: DashPage,
  },
  {
    path: "/items",
    component: ItemsPage,
  },
];

export default routes;

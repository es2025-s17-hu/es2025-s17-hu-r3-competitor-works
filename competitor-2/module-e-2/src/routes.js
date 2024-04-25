import LoginPage from "./Pages/LoginPage.vue";
import TablesPage from "./Pages/TablesPage.vue";
import OrderPage from "./Pages/OrderPage.vue";

const routes = [
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/tables",
    component: TablesPage,
  },
  {
    path: "/order/:id",
    component: OrderPage,
  },
];

export default routes;

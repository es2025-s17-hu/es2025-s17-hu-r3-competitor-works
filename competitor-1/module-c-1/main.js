const Express = require("express");
const db = require("./lib/db");
const crypto = require("./lib/crypto");
const { ensureAuth, w } = require("./lib/middleware");

const app = Express();
app.use(Express.json());

const router = Express.Router();

async function logIn(user) {
  const token = crypto.generateToken(user.username);
  await db.setUserToken(user.username, token);
  return token;
}

router.post(
  "/login",
  w(async (req, res) => {
    const { username, password } = req.body;

    const user = await db.getUserByName(username);

    if (!user || user.role !== "ADMIN" || password !== user.password) {
      return res.status(401).send("Unauthorized");
    }

    const token = await logIn(user);

    return res.json({
      token,
    });
  })
);

router.post(
  "/login/pin",
  w(async (req, res) => {
    const user = await db.getUserByPin(req.body.pin);

    if (!user || user.role !== "WAITER") {
      return res.status(401).send("Unauthorized");
    }

    const token = await logIn(user);

    return res.json({
      token,
    });
  })
);

router.post(
  "/logout",
  ensureAuth,
  w(async (req, res) => {
    await db.clearUserToken(req.user.username);

    return res.send("Logged out");
  })
);

router.get(
  "/stats",
  ensureAuth,
  w(async (req, res) => {
    const orderItems = await db.getOrderItems();
    const menuItems = await db.getMenuItems();

    const totalRevenue = orderItems.reduce(
      (a, x) =>
        parseFloat(menuItems.find((y) => y.id === x.menuItemId).price) *
          x.quantity +
        a,
      0
    );
    const countOfOrderItem = menuItems
      .map((x) => ({
        menuItemId: x.id,
        menuItemName: x.name,
        count: orderItems
          .filter((y) => y.menuItemId === x.id)
          .reduce((a, y) => y.quantity + a, 0),
      }))
      .filter((x) => x.count > 0);

    return res.json({
      totalRevenue,
      countOfOrderItem,
    });
  })
);

router.get(
  "/menuCategories",
  ensureAuth,
  w(async (req, res) => {
    const categories = await db.getMenuCategories();

    return res.json(categories);
  })
);

router.get(
  "/menuItems",
  ensureAuth,
  w(async (req, res) => {
    const items = await db.getMenuItems();

    return res.json(
      items.map((x) => ({
        ...x,
        price: parseFloat(x.price),
      }))
    );
  })
);

router.put(
  "/menuItems/:id",
  ensureAuth,
  w(async (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (
      typeof req.body.type === "string" &&
      !["FOOD", "DRINK", "OTHER"].includes(req.body.type)
    ) {
      return res.status(400).send("Value of the type field is invalid.");
    }

    await db.updateMenuItem(id, req.body);
    const item = await db.getMenuItem(id);

    if (!item) {
      return res.status(404).send("Menu item not found");
    }

    return res.json(item);
  })
);

router.delete(
  "/menuItems/:id",
  ensureAuth,
  w(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    await db.deleteMenuItem(id);

    return res.status(200).send("Menu item deleted");
  })
);

router.post(
  "/menuItems",
  ensureAuth,
  w(async (req, res) => {
    if (
      typeof req.body.name !== "string" ||
      typeof req.body.type !== "string" ||
      typeof req.body.menuCategoryId !== "number" ||
      typeof req.body.price !== "number"
    ) {
      return res.status(400).send("One of the mandatory fields is missing");
    }

    const menuCategory = db.getMenuCategory(req.body.menuCategoryId);
    if (!menuCategory) {
      return res
        .status(400)
        .send("Menucard category with the given ID does not exist.");
    }

    if (!["FOOD", "DRINK", "OTHER"].includes(req.body.type)) {
      return res.status(400).send("Value of the type field is invalid.");
    }

    const insert = await db.createMenuItem(req.body);
    const item = await db.getMenuItem(insert.insertId);
    item.price = parseFloat(item.price);
    res.json(item);
  })
);

router.post(
  "/orders",
  ensureAuth,
  w(async (req, res) => {
    const tableId = parseInt(req.body.tableId, 10);

    const table = await db.getTableById(tableId);

    if (!table) {
      return res.status(404).send("Table not found");
    }

    const openOrder = await db.getOpenOrderByTable(tableId);

    if (openOrder) {
      return res.status(400).send("Table already has an open order");
    }

    const insert = await db.createOrder(tableId);
    const order = await db.getOrderById(insert.insertId);
    return res.json(order);
  })
);

router.get(
  "/orders/tables/:tableId",
  ensureAuth,
  w(async (req, res) => {
    const tableId = parseInt(req.params.tableId, 10);

    // no need to check createdAt here since no new order can be created if the previous one isn't already closed
    const openOrder = await db.getOpenOrderByTable(tableId);
    if (!openOrder) {
      return res.status(404).send("Order not found");
    }

    const items = await db.getOrderItemsByOrder(openOrder.id);

    return res.json({
      ...openOrder,
      OrderItems: items,
    });
  })
);

router.put(
  "/orders/tables/:tableId/close",
  ensureAuth,
  w(async (req, res) => {
    const tableId = parseInt(req.params.tableId, 10);

    const openOrder = await db.getOpenOrderByTable(tableId);
    if (!openOrder) {
      return res.status(404).send("Order not found");
    }

    await db.closeOrder(openOrder.id);
    res.send("Order closed successfully");
  })
);

router.post(
  "/orderItems",
  ensureAuth,
  w(async (req, res) => {
    if (
      typeof req.body.orderId !== "number" ||
      typeof req.body.menuItemId !== "number" ||
      typeof req.body.quantity !== "number" ||
      req.body.quantity < 1
    ) {
      return res.status(400).send("Bad Request");
    }

    const order = await db.getOrderById(req.body.orderId);

    if (!order) {
      return res.status(404).send("Order not found");
    }

    if (order.closedAt !== null) {
      return res.status(400).send("Order is already closed");
    }

    const menuItem = await db.getMenuItem(req.body.menuItemId);

    if (!menuItem) {
      return res.status(404).send("Menu item not found");
    }

    const insert = await db.createOrderItem(req.body);
    const item = await db.getOrderItem(insert.insertId);
    return res.status(201).json(item);
  })
);

app.use("/api/v1", router);

app.listen(80, () => {
  console.log("DineEase backend listening on 80");
});

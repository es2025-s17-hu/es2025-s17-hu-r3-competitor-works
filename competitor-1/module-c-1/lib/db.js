const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "db.dineease.com",
  port: 3306,
  user: "competitor-1",
  password: "4621",
  database: "competitor-1",
});

async function getUserByName(username) {
  return (
    await db.query("SELECT * FROM User WHERE username = ? LIMIT 1;", [username])
  )[0][0];
}

async function getUserByPin(pin) {
  return (
    await db.query("SELECT * FROM User WHERE pin = ? LIMIT 1;", [pin])
  )[0][0];
}

async function setUserToken(username, token) {
  return (
    await db.query("UPDATE User SET token = ? WHERE username = ?", [
      token,
      username,
    ])
  )[0][0];
}

async function clearUserToken(username) {
  return (
    await db.query("UPDATE User SET token = NULL WHERE username = ?", [
      username,
    ])
  )[0][0];
}

async function getUserByToken(token) {
  return (
    await db.query("SELECT * FROM User WHERE token = ? LIMIT 1;", [token])
  )[0][0];
}

async function getOrderItems() {
  return (await db.query("SELECT * FROM OrderItem;"))[0];
}

async function getMenuItems() {
  return (
    await db.query(
      "SELECT id, name, type, menuCategoryId, price, createdAt, updatedAt FROM MenuItem;"
    )
  )[0];
}

async function getMenuItem(id) {
  return (
    await db.query(
      "SELECT id, name, type, menuCategoryId, price, createdAt, updatedAt FROM MenuItem WHERE id = ? LIMIT 1;",
      [id]
    )
  )[0][0];
}

async function deleteMenuItem(id) {
  return await db.query("DELETE FROM MenuItem WHERE id = ?;", [id]);
}

async function updateMenuItem(id, changes) {
  const allowedChanges = ["name", "type", "menuCategoryId", "price"];
  const trueChanges = Object.entries(changes).filter((x) =>
    allowedChanges.includes(x[0])
  );

  return await db.query(
    "UPDATE MenuItem SET updatedAt = CURRENT_TIMESTAMP, " +
      trueChanges.map((x) => x[0] + " = ?").join(", ") +
      " WHERE id = ?",
    [...trueChanges.map((x) => x[1]), id]
  );
}

async function createMenuItem(params) {
  return (
    await db.query(
      "INSERT INTO MenuItem (name, type, menuCategoryId, price, createdAt, updatedAt) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);",
      [params.name, params.type, params.menuCategoryId, params.price.toFixed(2)]
    )
  )[0];
}

async function getMenuCategories() {
  return (
    await db.query(
      "SELECT id, name, priority, createdAt, updatedAt FROM MenuCategory;"
    )
  )[0];
}

async function getMenuCategory(id) {
  return (
    await db.query(
      "SELECT id, name, priority, createdAt, updatedAt FROM MenuCategory;"
    )
  )[0][0];
}

async function getOpenOrderByTable(tableId) {
  return (
    await db.query(
      "SELECT * FROM `Order` WHERE tableId = ? AND closedAt IS NULL LIMIT 1;",
      [tableId]
    )
  )[0][0];
}

async function getTableById(id) {
  return (
    await db.query("SELECT * FROM `Table` WHERE id = ? LIMIT 1;", [id])
  )[0][0];
}

async function createOrder(tableId) {
  return (
    await db.query(
      "INSERT INTO `Order` (tableId, createdAt, updatedAt, closedAt) VALUES (?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL);",
      [tableId]
    )
  )[0];
}

async function getOrderById(id) {
  return (
    await db.query(
      "SELECT id, tableId, createdAt, updatedAt, closedAt FROM `Order` WHERE id = ?;",
      [id]
    )
  )[0][0];
}

async function closeOrder(id) {
  return await db.query(
    "UPDATE `Order` SET closedAt = CURRENT_TIMESTAMP WHERE id = ?;",
    [id]
  );
}

async function getOrderItemsByOrder(orderId) {
  const orderItems = (
    await db.query("SELECT * FROM OrderItem WHERE orderId = ?;", [orderId])
  )[0];

  const menuIds = [...new Set(orderItems.map((x) => x.menuItemId))];
  const menuItems = [];
  for (const id of menuIds) {
    const item = await getMenuItem(id);
    menuItems.push({
      ...item,
      price: parseFloat(item.price),
    });
  }

  return orderItems.map((x) => ({
    ...x,
    MenuItem: menuItems.find((y) => y.id === x.menuItemId),
  }));
}

async function createOrderItem(params) {
  return (
    await db.query(
      "INSERT INTO OrderItem (orderId, menuItemId, quantity, createdAt, updatedAt) VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);",
      [params.orderId, params.menuItemId, params.quantity]
    )
  )[0];
}

async function getOrderItem(id) {
  return (
    await db.query(
      "SELECT id, orderId, menuItemId, quantity, createdAt, updatedAt FROM OrderItem WHERE id = ?;",
      [id]
    )
  )[0][0];
}

module.exports = {
  getUserByName,
  getUserByPin,
  getUserByToken,
  setUserToken,
  clearUserToken,

  getMenuCategories,
  getMenuCategory,

  getMenuItems,
  getMenuItem,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,

  getTableById,

  getOrderById,
  getOpenOrderByTable,
  createOrder,
  closeOrder,

  getOrderItems,
  getOrderItem,
  getOrderItemsByOrder,
  createOrderItem,
};

const express = require("express");
const app = express();
const port = 3000;

const { body, validationResult } = require("express-validator");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());

const Auth = async function (req, res, next) {
  if (req.path != "/login" && req.path != "/login/pin") {
    req.token = req.get("Authorization")?.split(" ")[1];

    if (!req.token) {
      return res.sendStatus(401);
    }

    const user = await prisma.user.findFirst({
      where: {
        token: req.token,
      },
    });

    if (user == null) {
      return res.sendStatus(401);
    }
  }

  next();
};

app.use(Auth);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post(
  "/login",
  body("username").exists(),
  body("password").exists(),
  async (req, res) => {
    const validate = validationResult(req);
    if (!validate.isEmpty()) {
      return res.sendStatus(400);
    }

    const user = await prisma.user.findFirst({
      where: {
        username: req.body.username,
        password: req.body.password,
      },
    });

    if (user == null || user.role != "ADMIN") {
      return res.sendStatus(401);
    }

    const crypto = require("crypto");
    const hash = crypto.createHash("md5").update(user.username).digest("hex");

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        token: hash,
      },
    });

    return res.json({ token: hash });
  }
);

app.post("/login/pin", body("pin").exists(), async (req, res) => {
  const validate = validationResult(req);
  if (!validate.isEmpty()) {
    return res.sendStatus(400);
  }

  const user = await prisma.user.findFirst({
    where: {
      pin: req.body.pin,
    },
  });

  if (user == null || user.role != "WAITER") {
    return res.sendStatus(401);
  }

  const crypto = require("crypto");
  const hash = crypto.createHash("md5").update(user.username).digest("hex");

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      token: hash,
    },
  });

  return res.json({ token: hash });
});

app.post("/logout", async (req, res) => {
  const user = await prisma.user.findFirst({
    where: {
      token: req.token,
    },
  });

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      token: null,
    },
  });

  res.send("Logged out");
});

app.get("/menuCategories", async (req, res) => {
  const categories = await prisma.menuCategory.findMany({
    orderBy: {
      priority: "asc",
    },
  });

  return res.json(categories);
});

app.get("/menuItems", async (req, res) => {
  const categories = await prisma.menuItem.findMany();

  return res.json(categories);
});

app.post(
  "/menuItems",
  body("name").exists(),
  body("type").exists(),
  body("menuCategoryId").exists(),
  body("price").exists(),
  async (req, res) => {
    const validate = validationResult(req);
    if (!validate.isEmpty()) {
      return res.status(400).send("One of the mandatory fields is missing");
    }

    const category = await prisma.menuCategory.findUnique({
      where: {
        id: req.body.menuCategoryId,
      },
    });
    if (category == null) {
      return res
        .status(400)
        .send("Menucard category with the given ID does not exist");
    }

    if (!["FOOD", "DRINK", "OTHER"].includes(req.body.type)) {
      return res.status(400).send("Value of the type field is invalid");
    }

    const item = await prisma.menuItem.create({
      data: {
        name: req.body.name,
        type: req.body.type,
        menuCategoryId: req.body.menuCategoryId,
        price: req.body.price,
        updatedAt: new Date(),
      },
    });

    return res.json(item);
  }
);

app.put("/menuItems/:id", async (req, res) => {
  const id = Number(req.params["id"]);

  const item = await prisma.menuItem.findUnique({
    where: {
      id: id,
    },
  });
  if (item == null) {
    return res.status(404).send("Menu item not found");
  }

  const updated = await prisma.menuItem.update({
    where: {
      id: id,
    },
    data: {
      name: req.body.name || item.name,
      type: req.body.type || item.type,
      menuCategoryId: req.body.menuCategoryId || item.menuCategoryId,
      price: req.body.price || item.price,
      updatedAt: new Date(),
    },
  });

  return res.json(updated);
});

app.delete("/menuItems/:id", async (req, res) => {
  const id = Number(req.params["id"]);

  await prisma.menuItem.delete({
    where: {
      id: id,
    },
  });

  return res.send("Menu item deleted");
});

app.post("/orders", body("tableId").exists(), async (req, res) => {
  const validate = validationResult(req);
  if (!validate.isEmpty()) {
    return res.status(400).send("One of the mandatory fields is missing");
  }

  const existing = await prisma.order.findFirst({
    where: {
      tableId: Number(req.body.tableId),
    },
  });
  if (existing) {
    return res.status(400).send("Table already has an open order");
  }

  const table = await prisma.table.findUnique({
    where: {
      id: Number(req.body.tableId),
    },
  });
  if (table == null) {
    return res.status(404).send("Table not found");
  }

  const newOrder = await prisma.order.create({
    data: {
      tableId: Number(req.body.tableId),
      updatedAt: new Date(),
    },
  });

  return res.json(newOrder);
});

app.get("/orders/tables/:id", async (req, res) => {
  const order = await prisma.order.findFirst({
    where: {
      tableId: req.params[0],
      closedAt: { not: null },
    },
  });
  if (order == null) {
    return res.status(404).send("Order not found");
  }

  return res.json(order);
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

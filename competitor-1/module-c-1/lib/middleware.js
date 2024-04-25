const db = require("./db");

function w(func) {
  return (req, res, next) => {
    func(req, res, next)
      .then(() => {})
      .catch((e) => next(e));
  };
}

async function ensureAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth.startsWith("Bearer ")) {
    return res.status(401).send("Unauthorized");
  }

  const token = auth.slice("Bearer ".length);
  const user = await db.getUserByToken(token);

  if (!user) {
    return res.status(401).send("Unauthorized");
  }

  req.user = user;
  next();
}

module.exports = { w, ensureAuth: w(ensureAuth) };

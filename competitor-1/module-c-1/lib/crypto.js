const crypto = require("crypto");

function generateToken(username) {
  return crypto.createHash("md5").update(username).digest("hex");
}

module.exports = { generateToken };

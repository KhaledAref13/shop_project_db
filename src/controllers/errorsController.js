const { join } = require("path");

const error404 = (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "public", "404.html"));
};
const error500 = (err, req, res, next) => {
  res.sendFile(join(__dirname, "..", "..", "public", "500.html"));
};

module.exports = { error404, error500 };

require("dotenv").config();

module.exports = function (req, res, next) {
  const key =
    req.headers["x-admin-key"] ||
    req.headers["x-admin_key"] ||
    req.query.adminKey;

  if (!key) {
    return res.status(401).json({ message: "No admin key provided" });
  }

  if (key === process.env.ADMIN_KEY) {
    return next();
  }

  return res.status(403).json({ message: "Unauthorized" });
};

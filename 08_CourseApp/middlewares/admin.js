const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  const { username, password } = req.headers;
  
  const admin = await Admin.findOne({
    username: username,
    password: password,
  });

  if (!admin) {
    return res.status(400).send({ message: "Admin not found" });
  } else {
    req.admin = admin;
    next();
  }
}

module.exports = adminMiddleware;

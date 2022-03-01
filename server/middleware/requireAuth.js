require("dotenv").config();
const jwt = require("jsonwebtoken");

const User = require("../models/User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send("Access Denied");
  }

  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).send("You must be logged in to access this route");
    }

    const { userId } = payload;

    const user = await User.findById(userId);

    req.user = user;

    next();
  });
};

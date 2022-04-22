const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  pokemon: [String],
});

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  const salt = bcryptjs.genSaltSync(10);
  const hashedPass = bcryptjs.hashSync(user.password, salt);

  user.password = hashedPass;

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;

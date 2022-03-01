const User = require("../models/User");
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.authRegister = async (req, res) => {
  // destructure email, password
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return res.send("Must provide all fields");
  }

  try {
    //look for existing user in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) return res.send("This user already exists");

    //if the user is not here
    const newUser = new User({ email, password, username });

    await newUser.save();

    //write user to token
    const token = jwt.sign({ userId: newUser._id }, process.env.SECRET, expire);

    res.status(200).json({ message: "new user created", token });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.authLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send(400).send("Must provide credentials");
  }

  try {
    const user = await User.findOne({ email });

    //if no user
    if (!user) return res.status(404).send("User not found");

    const matched = bcryptjs.compareSync(password, user.password);

    const token = jwt.sign({ userId: user._id }, process.env.SECRET);

    if (!matched) return res.status(200).send("Incorrect Credentials");

    res.json({ message: "user authenticated", token });
  } catch (error) {
    res.send(error.message);
    console.log(error);
  }
};

exports.home = (req, res) => {
  const { username } = req.user;

  res.send(username);
};

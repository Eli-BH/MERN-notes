const User = require("../models/User");
const bcryptjs = require("bcrypt");

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

    //encrypt the password
    const salt = bcryptjs.genSaltSync(10);
    const hashedPass = bcryptjs.hashSync(password, salt);

    //if the user is not here

    const newUser = new User({ email, password: hashedPass, username });

    await newUser.save();

    res.status(200).json({ message: "new user created", newUser });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

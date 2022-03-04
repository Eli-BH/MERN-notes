require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const authRoutes = require("./routes/authRoutes");
const axios = require("axios");
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

//route
app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api/auth", authRoutes);

app.get("/pokemon", async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );

    res.json(data.forms);
  } catch (error) {
    res.send(error);
  }
});

//mongoose connection
mongoose
  .connect("mongodb://localhost:27017/bank", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

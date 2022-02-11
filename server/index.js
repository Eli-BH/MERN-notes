const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const authRoutes = require("./routes/authRoutes");

//middleware
app.use(express.json());

//route
app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api/auth", authRoutes);

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

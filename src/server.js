const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

app.use(express.json());
const userRoutes = require("./routes/user.routes");

mongoose
  .connect("mongodb://127.0.0.1:27017/gitUser")
  .then(() => console.log("connected to database 🙂"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => res.send("hello world"));
app.use("/api", userRoutes);

app.listen(port, () => console.log(`app is listening on port ${port}`));

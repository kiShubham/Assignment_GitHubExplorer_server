const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

app.use(express.json());
const userRoutes = require("./routes/user.routes");

const MongoDb_uri =
  "mongodb+srv://newUser1:newUser1@taskmanagement.eilteg5.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagement";

mongoose
  .connect(MongoDb_uri)
  .then(() => console.log("connected to database 🙂"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => res.send("hello world"));
app.use("/api", userRoutes);

app.listen(port, () => console.log(`app is listening on port ${port}`));

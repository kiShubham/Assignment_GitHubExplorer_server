const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3000;

app.use(cors());
app.use(express.json());
const userRoutes = require("./routes/user.routes");

const MongoDb_uri = "mongodb://127.0.0.1:27017/gitUser";
// "mongodb+srv://newUser1:newUser1@taskmanagement.eilteg5.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagement";

mongoose
  .connect(MongoDb_uri)
  .then(() => console.log("connected to database 🙂"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => res.send("backend is up and running"));
app.use("/api", userRoutes);

app.listen(port, () => console.log(`app is listening on port ${port}`));

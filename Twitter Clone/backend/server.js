require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
const dbConnect = require("./config/dbConnect");
const PORT = process.env.PORT || 3500;

dbConnect();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
//potentially swap if json parsing no work right
app.use(express.json());
app.use("/tweet", require("./routes/tweet"));

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
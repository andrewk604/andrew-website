const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/auth.routes");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const mongoUri = process.env.mongoUri;

const app = express();

app.use(express.json({ extended: true }));
app.use("/auth", router);
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//     "Access-Control-Allow-Origin": process.env.CLIENT_URL
//   })
// );
app.use(cors());

const start = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => console.log(`App started on port ${PORT}`));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

start();

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const auth = require("./routes/authRoutes");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//connect to mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`connected to mongodb and server is connect at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", auth);

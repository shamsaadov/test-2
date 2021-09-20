require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const router = require("./routes/index");

const app = express();

app.use(cors());
app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Подключился к монгоДБ");
  })
  .catch((e) => {
    console.log(
      `Ошибка подключения к базе Монго! Почитай следующее: ${e.message}`
    );
  });

app.listen(process.env.PORT, () => {
  console.log(`Локальное подключение к ${process.env.PORT}`);
});

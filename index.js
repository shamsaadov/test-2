require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes/index");

const app = express();
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
app.listen(process.env.PORT, async () => {
  console.log(`Локальное подключение к ${process.env.PORT}`);
});

// ToDo сделать дотенв

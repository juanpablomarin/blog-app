const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const config = require("./app/config");
const router = require("./app/router");
var cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === "test") {
  app.set("port", config.test_port);
  app.listen(app.get("port"), err => {
    err
      ? console.error(err)
      : console.log(`Server listening on port ${app.get("port")}`);

    const db = mongoose.connect(config.test_db);

    mongoose.connection.on("connected", () => {
      console.log(`Mongoose connected to ${config.test_db}`);
    });
  });
} else {
  app.set("port", config.port);
  app.listen(app.get("port"), err => {
    err
      ? console.error(err)
      : console.log(`Server listening on port ${app.get("port")}`);

    const db = mongoose.connect(config.db);
    mongoose.connection.on("connected", () => {
      console.log(`Mongoose connected to ${config.db}`);
    });
  });
}

router(app);
module.exports = app;

const mongoose = require("mongoose");

const initDB = () => {
  mongoose.connect(
    "mongodb://localhost/leticia-pokemon",
    { useNewUrlParser: true }
  );

  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

module.exports = initDB;

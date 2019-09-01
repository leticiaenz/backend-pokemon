const mongoose = require("mongoose");

const initDB = () => {
  mongoose.connect(
    "mongodb+srv://leticiaenz:Devs2019@@cluster0-ohsut.mongodb.net/leticia-pokemon",
    { useNewUrlParser: true }
  );

  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

module.exports = initDB;

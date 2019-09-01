const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  name: String,
  number: String
});

module.exports = mongoose.model("Pokemon", PokemonSchema);

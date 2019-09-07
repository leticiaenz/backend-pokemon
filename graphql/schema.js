const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require("graphql");

const pokemonGraphType = require("./PokemonType");
const Pokemon = require("../models/pokemons");
const Mutations = require("./mutations");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    pokemon: {
      type: pokemonGraphType,
      args: { name: { type: GraphQLString } },
      resolve(parent, args) {
        return Pokemon.findOne({ name: args.name });
      }
    },
    pokemons: {
      type: new GraphQLList(pokemonGraphType),
      args: {},
      resolve(parent, args) {
        return Pokemon.find();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID
} = require("graphql");

const pokemonGraphType = require("./PokemonType");
const Pokemon = require("../models/pokemons");
const Mutation = require("./mutations");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    pokemon: {
      type: pokemonGraphType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Pokemon.findById(args.id);
      }
    },
    pokemons: {
      type: new GraphQLList(pokemonGraphType),
      args: { first: { type: GraphQLInt } },
      resolve(parent, args) {
        return Pokemon.find().limit(args.first);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

const { GraphQLObjectType, GraphQLString } = require("graphql");
const pokemonGraphQLType = require("./PokemonType");
const Pokemon = require("./../models/pokemons");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPokemon: {
      type: pokemonGraphQLType,
      args: {
        name: { type: GraphQLString },
        number: { type: GraphQLString }
      },
      resolve(parent, args) {
        const newPokemon = new Pokemon({
          name: args.name,
          number: args.number
        });

        return newPokemon.save();
      }
    }
  }
});

module.exports = Mutation;

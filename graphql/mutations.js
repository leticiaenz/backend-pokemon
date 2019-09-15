const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const pokemonGraphQLType = require("./PokemonType");
const Pokemon = require("./../models/pokemons");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPokemon: {
      type: pokemonGraphQLType,
      args: {
        name: { type: GraphQLString },
        number: { type: GraphQLString },
        image: { type: GraphQLString },
        types: { type: new GraphQLList(GraphQLString) },
        resistances: { type: new GraphQLList(GraphQLString) }
      },
      resolve(parent, args) {
        const newPokemon = new Pokemon({
          name: args.name,
          number: args.number,
          image: args.image,
          types: args.types,
          resistances: args.resistances
        });

        return newPokemon.save();
      }
    },
    //update pokemon mutation
    updatePokemon: {
      type: pokemonGraphQLType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        number: { type: GraphQLString },
        image: { type: GraphQLString },
        types: { type: new GraphQLList(GraphQLString) },
        resistances: { type: new GraphQLList(GraphQLString) }
      },
      resolve(parent, args) {
        const updatePokemon = {
          name: args.name,
          number: args.number,
          image: args.image,
          types: args.types,
          resistances: args.resistances
        };
        return Pokemon.findByIdAndUpdate(args.id, updatePokemon, { new: true });
      }
    },
    //remove pokemon mutation
    removePokemon: {
      type: pokemonGraphQLType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Pokemon.findOneAndDelete(args.id);
      }
    }
  }
});

module.exports = Mutation;

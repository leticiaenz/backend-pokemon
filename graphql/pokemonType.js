const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;

const PokemonType = new GraphQLObjectType({
  name: "Pokemon",
  fields: () => ({
    name: { type: GraphQLString },
    number: { type: GraphQLString }
  })
});

module.exports = PokemonType;

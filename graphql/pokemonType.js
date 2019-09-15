const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const PokemonType = new GraphQLObjectType({
  name: "Pokemon",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    number: { type: GraphQLString },
    image: { type: GraphQLString },
    types: { type: new GraphQLList(GraphQLString) },
    resistances: { type: new GraphQLList(GraphQLString) }
  })
});

module.exports = PokemonType;

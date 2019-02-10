var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLID = require("graphql").GraphQLID;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLInt = require("graphql").GraphQLInt;
var GraphQLList = require("graphql").GraphQLList;

exports.eventType = new GraphQLObjectType({
  name: "event",
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      imgs: { type: new GraphQLList(GraphQLString) },
      links: { type: new GraphQLList(GraphQLString) },
      speakers: { type: new GraphQLList(GraphQLInt)}
    };
  }
});

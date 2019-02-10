var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLID = require("graphql").GraphQLID;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLInt = require("graphql").GraphQLInt;
var GraphQLList = require("graphql").GraphQLList;

exports.memberType = new GraphQLObjectType({
  name: "member",
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: { type: GraphQLString },
      tittle: { type: GraphQLString },
      imgs: { type: new GraphQLList(GraphQLString) },
      email: { type: GraphQLString },
      links: { type: new GraphQLList(GraphQLString) },
      joinDate: { type: new GraphQLList(GraphQLInt)}
    };
  }
});

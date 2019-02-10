var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLInt = require("graphql").GraphQLInt;
var GraphQLList = require("graphql").GraphQLList;

var memberType = require("../../../Types/MemberType");
var memberModel = require("../../../../MongoDB/memberModel");

exports.addMember = {
  type: memberType.memberType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    tittle: {
      type: new GraphQLNonNull(GraphQLString)
    },
    imgs: {
      type: new GraphQLList(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    links: {
      type: new GraphQLList(GraphQLString)
    },
    joinDate: {
      type: new GraphQLList(GraphQLInt)
    }
  },
  resolve: async (root, args) => {
    const uModel = new memberModel(args);
    const newMember = await uModel.save();
    if (!newMember) {
      throw new Error("error");
    }
    return newMember;
  }
};

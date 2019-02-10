var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLInt = require("graphql").GraphQLInt;
var GraphQLList = require("graphql").GraphQLList;

var memberType = require("../../../Types/MemberType");
var memberModel = require("../../../../MongoDB/memberModel");

exports.updateMember = {
  type: memberType.memberType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLString
    },
    tittle: {
      type: GraphQLString
    },
    imgs: {
      type: new GraphQLList(GraphQLString)
    },
    email: {
      type: GraphQLString
    },
    links: {
      type: new GraphQLList(GraphQLString)
    },
    joinDate: {
      type: new GraphQLList(GraphQLInt)
    }
  },
  resolve: async (root, args) => {
    const UpdatedMember = await memberModel.findByIdAndUpdate(args.id, args);
    if (!UpdatedMember) {
      throw new Error("Error");
    }
    return UpdatedMember;
  }
};

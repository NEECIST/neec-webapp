var GraphQLList = require('graphql').GraphQLList;
var MemberModel = require('../../../../MongoDB/memberModel');
var memberType = require('../../../Types/MemberType').memberType;

exports.getMembers = {
  type: new GraphQLList(memberType),
  resolve: async () => {
    const members = await MemberModel.find();
    if (!members) {
      throw new Error("error while fetching data");
    }
    return members;
  }
};

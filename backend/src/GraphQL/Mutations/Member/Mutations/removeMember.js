var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;

var memberType = require('../../../Types/MemberType');
var memberModel = require('../../../../MongoDB/memberModel');

exports.removeMember = {
  type: memberType.memberType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async(root, args)=> {
    const removedMember = await memberModel.findByIdAndRemove(args.id)
    if (!removedMember) {
      throw new Error('error')
    }
    return removedMember;
  }
}
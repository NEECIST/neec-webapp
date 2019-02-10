var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;

var workshopType = require('../../../Types/WorkshopType');
var workshopModel = require('../../../../MongoDB/workshopModel');

exports.removeWorkshop = {
  type: workshopType.workshopType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async(root, args)=> {
    const removedWorkshop = await workshopModel.findByIdAndRemove(args.id)
    if (!removedWorkshop) {
      throw new Error('error')
    }
    return removedWorkshop;
  }
}
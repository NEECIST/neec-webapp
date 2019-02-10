var GraphQLList = require('graphql').GraphQLList;
var WorkshopModel = require('../../../../MongoDB/workshopModel');
var workshopType = require('../../../Types/WorkshopType').workshopType;

exports.getWorkshops = {
  type: new GraphQLList(workshopType),
  resolve: async () => {
    const workshops = await workshopModel.find();
    if (!workshops) {
      throw new Error("error while fetching data");
    }
    return workshops;
  }
};

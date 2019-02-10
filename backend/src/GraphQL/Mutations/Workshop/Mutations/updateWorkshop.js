var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLList = require("graphql").GraphQLList;
var GraphQLInt = require("graphql").GraphQLInt;

var workshopType = require("../../../Types/WorkshopType");
var workshopModel = require("../../../../MongoDB/workshopModel");

exports.updateWorkshop = {
  type: workshopType.workshopType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    imgs: {
      type: new GraphQLList(GraphQLString)
    },
    links: {
      type: new GraphQLList(GraphQLString)
    },
    speakers: {
      type: new GraphQLList(GraphQLInt)
    }
  },
  resolve: async (root, args) => {
    const UpdatedWorkshop = await workshopModel.findByIdAndUpdate(args.id, args);
    if (!UpdatedWorkshop) {
      throw new Error("Error");
    }
    return UpdatedWorkshop;
  }
};

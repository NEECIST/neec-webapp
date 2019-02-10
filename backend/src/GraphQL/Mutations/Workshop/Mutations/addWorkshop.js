var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLList = require("graphql").GraphQLList;
var GraphQLInt = require("graphql").GraphQLInt;

var workshopType = require("../../../Types/WorkshopType");
var workshopModel = require("../../../../MongoDB/workshopModel");

exports.addWorkshop = {
  type: workshopType.workshopType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
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
    const uModel = new workshopModel(args);
    const newWorkshop = await uModel.save();
    if (!newWorkshop) {
      throw new Error("error");
    }
    return newWorkshop;
  }
};

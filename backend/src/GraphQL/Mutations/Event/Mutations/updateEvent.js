var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLList = require("graphql").GraphQLList;
var GraphQLInt = require("graphql").GraphQLInt;

var eventType = require("../../../Types/EventType");
var eventModel = require("../../../../MongoDB/eventModel");

exports.updateEvent = {
  type: eventType.eventType,
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
    const UpdatedEvent = await eventModel.findByIdAndUpdate(args.id, args);
    if (!UpdatedEvent) {
      throw new Error("Error");
    }
    return UpdatedEvent;
  }
};

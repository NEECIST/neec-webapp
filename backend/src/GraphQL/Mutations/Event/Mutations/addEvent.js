var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLList = require("graphql").GraphQLList;
var GraphQLInt = require("graphql").GraphQLInt;

var eventType = require("../../../Types/EventType");
var eventModel = require("../../../../MongoDB/eventModel");

exports.addEvent = {
  type: eventType.eventType,
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
    const uModel = new eventModel(args);
    const newEvent = await uModel.save();
    if (!newEvent) {
      throw new Error("error");
    }
    return newEvent;
  }
};

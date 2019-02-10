var GraphQLList = require('graphql').GraphQLList;
var EventModel = require('../../../../MongoDB/eventModel');
var eventType = require('../../../Types/EventType').eventType;

exports.getEvents = {
  type: new GraphQLList(eventType),
  resolve: async () => {
    const events = await EventModel.find();
    if (!events) {
      throw new Error("error while fetching data");
    }
    return events;
  }
};

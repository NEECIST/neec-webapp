var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;

var eventType = require('../../../Types/EventType');
var eventModel = require('../../../../MongoDB/eventModel');

exports.removeEvent = {
  type: eventType.eventType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async(root, args)=> {
    const removedEvent = await eventModel.findByIdAndRemove(args.id)
    if (!removedEvent) {
      throw new Error('error')
    }
    return removedEvent;
  }
}
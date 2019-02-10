var GraphQLObjectType = require('graphql').GraphQLObjectType;
var speakerMutations = require('./Speaker/speakerMutations');
var eventMutations = require('./Event/eventMutations');
var workshopMutations = require('./Workshop/workshopMutations');

//Pools all GraphQL mutations
var mutations = Object.assign(speakerMutations, eventMutations, workshopMutations);

exports.Mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
})
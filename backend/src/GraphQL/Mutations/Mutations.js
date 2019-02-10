var GraphQLObjectType = require('graphql').GraphQLObjectType;
var speakerMutations = require('./Speaker/speakerMutations');
var eventMutations = require('./Event/eventMutations');

//Pools all GraphQL mutations
var mutations = Object.assign(speakerMutations, eventMutations);

exports.Mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
})
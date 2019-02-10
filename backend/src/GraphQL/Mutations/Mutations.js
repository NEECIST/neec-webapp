var GraphQLObjectType = require('graphql').GraphQLObjectType;
var memberMutations = require('./Member/memberMutations');
var eventMutations = require('./Event/eventMutations');
var workshopMutations = require('./Workshop/workshopMutations');

//Pools all GraphQL mutations
var mutations = Object.assign(memberMutations, eventMutations, workshopMutations);

exports.Mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
})
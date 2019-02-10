var GraphQLObjectType = require('graphql').GraphQLObjectType;
var speakerQueries = require('./Speaker/speakerQueries');
var eventQueries = require('./Event/eventQueries');

//Pools all GraphQL queries
var queries = Object.assign(speakerQueries, eventQueries);

exports.Queries = new GraphQLObjectType({
    name: 'Query',
    fields: queries
})
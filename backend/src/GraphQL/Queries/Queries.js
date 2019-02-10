var GraphQLObjectType = require('graphql').GraphQLObjectType;
var speakerQueries = require('./Speaker/speakerQueries');
var eventQueries = require('./Event/eventQueries');
var workshopQueries = require('./Workshop/workshopQueries');

//Pools all GraphQL queries
var queries = Object.assign(speakerQueries, eventQueries, workshopQueries);

exports.Queries = new GraphQLObjectType({
    name: 'Query',
    fields: queries
})
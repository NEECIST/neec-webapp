var GraphQLObjectType = require('graphql').GraphQLObjectType;
var memberQueries = require('./Member/memberQueries');
var eventQueries = require('./Event/eventQueries');
var workshopQueries = require('./Workshop/workshopQueries');

//Pools all GraphQL queries
var queries = Object.assign(memberQueries, eventQueries, workshopQueries);

exports.Queries = new GraphQLObjectType({
    name: 'Query',
    fields: queries
})
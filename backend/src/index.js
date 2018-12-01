const cors = require('micro-cors')();
const { ApolloServer } = require('apollo-server-micro');

const schema = require('./schema');

const server = new ApolloServer(schema);

module.exports = cors(server.createHandler());

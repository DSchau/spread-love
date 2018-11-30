const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema');

const server = new ApolloServer(schema);

const app = express();
server.applyMiddleware({ app });

const port = 8080;

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);

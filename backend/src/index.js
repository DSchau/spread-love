const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema');

const server = new ApolloServer(schema);

const app = express();
server.applyMiddleware({ app });
app.get('/', (req, res) => {
  res.redirect('/graphql');
});

const port = 4000;

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);

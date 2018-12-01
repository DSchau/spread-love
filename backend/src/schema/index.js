module.exports = {
  context: require('./context'),
  resolvers: require('./resolvers'),
  schemaDirectives: require('./schema-directives'),
  typeDefs: require('./type-defs'),
  introspection: true,
  playground: true,
};

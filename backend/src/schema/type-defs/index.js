const { gql } = require('apollo-server-express');

module.exports = gql`
  directive @date(defaultFormat: String = "MM/DD/YYYY") on FIELD_DEFINITION

  scalar Date

  enum SORT_ORDER {
    ASC
    DESC
  }

  type Love {
    id: Int!
    name: String!
    created: Date! @date
  }

  input Filter {
    id: Int
    name: String!
    created: Date @date
  }

  input Sort {
    fields: [String]!
    order: SORT_ORDER!
  }

  type Query {
    love(
      filter: Filter
      sort: Sort = { fields: ["created"], order: DESC }
      limit: Int
    ): [Love]
  }

  type Mutation {
    addLove(name: String!): Love!
  }
`;

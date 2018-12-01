const { gql } = require('apollo-server-micro');

module.exports = gql`
  directive @date(defaultFormat: String = "MM/DD/YYYY") on FIELD_DEFINITION

  scalar Date

  enum SORT_ORDER {
    ASC
    DESC
  }

  type Love {
    id: ID!
    name: String!
    created: Date! @date
  }

  type LoveCounts {
    id: ID!
    name: String!
    count: Int!
  }

  input Filter {
    id: ID
    name: String!
    created: Date
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
    allLove: [LoveCounts]
  }

  type Mutation {
    addLove(name: String!): Love!
    reset: Boolean!
  }
`;

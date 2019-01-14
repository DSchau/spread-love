import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: `https://backend-a88p4d1h3.now.sh/graphql`,
  fetch,
})

import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: `https://backend-gu2bfuoev.now.sh/graphql`,
  fetch,
})

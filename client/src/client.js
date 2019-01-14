import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: `https://backend-4e442b0jk.now.sh/graphql`,
  fetch,
})

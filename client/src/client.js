import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: `https://dschauspread-love-graphql-ecmfdjicif.now.sh/graphql`,
  fetch,
})

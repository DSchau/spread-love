import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import 'normalize.css'
import 'typeface-montserrat'

const client = new ApolloClient({
  uri: `TODO`,
})

export const wrapRootElement = ({ element }) => {
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}

import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './client'

export const wrapRootElement = ({ element }) => {
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}

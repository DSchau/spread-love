import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './src/client'

import 'normalize.css'
import 'typeface-montserrat'

export const wrapRootElement = ({ element }) => {
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}

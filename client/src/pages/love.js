import React from 'react'
import styled from '@emotion/styled'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import { LoveCanvas } from '../components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
  overflow-x: scroll;
  position: relative;
`

function Love() {
  return (
    <Query
      query={gql`
        {
          allLove {
            name
            count
          }
        }
      `}
      pollInterval={1500}
      children={({ data, loading, error }) => {
        if (loading || error) {
          return null
        }
        return (
          <Container>
            <LoveCanvas items={data.allLove} />
          </Container>
        )
      }}
    />
  )
}

export default Love

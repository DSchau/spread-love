import React from 'react'
import styled from 'react-emotion'
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

class Love extends React.Component {
  state = {
    something: false,
  }

  render() {
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
}

export default Love

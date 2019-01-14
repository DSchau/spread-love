import React from 'react'
import styled from '@emotion/styled'
// TODO: gql apollo-boost
// TODO: Query react-apollo

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
  // TODO: implement Query
  // TODO: pollInterval
  return (
    <Container>
      <LoveCanvas items={[]} />
    </Container>
  )
}

export default Love

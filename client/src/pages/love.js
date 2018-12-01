import React from 'react'
import styled from 'react-emotion'

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

/*
 * TODO: implement query
 */
class Love extends React.Component {
  state = {
    something: false,
  }

  render() {
    return (
      <Container>
        <LoveCanvas
          items={new Array(100).fill(undefined).map(() => ({
            name: 'whatever',
            count: Math.floor(Math.random() * 500),
          }))}
        />
      </Container>
    )
  }
}

export default Love

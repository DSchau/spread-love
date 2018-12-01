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
  overflow: hidden;
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
          items={[
            {
              name: 'asdf',
              count: 10,
            },
            {
              name: 'werr',
              count: 10,
            },
            {
              name: 'hahah',
              count: 10,
            },
            {
              name: 'sup',
              count: 10,
            },
          ]}
        />
      </Container>
    )
  }
}

export default Love

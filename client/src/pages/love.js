import React from 'react'
import styled from 'react-emotion'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
  background-color: #fe251b;
  overflow: hidden;
  position: relative;
`

/*
 * TODO: implement query
 */
function Love() {
  return (
    <Container>
      <h1 css={{ color: 'white' }}>These are the results.</h1>
    </Container>
  )
}

export default Love

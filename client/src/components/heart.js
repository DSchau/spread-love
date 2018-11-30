import React from 'react'
import styled from 'react-emotion'

import { PULSE_ANIMATION } from '../style'

const Container = styled.span`
  display: inline-block;
  animation: 2s infinite ${PULSE_ANIMATION}
    cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transition: 2s ease-in-out;

  :hover {
    animation: none;
  }
`

export default function Heart() {
  return (
    <Container role="img" aria-label="Heart">
      ❤️
    </Container>
  )
}

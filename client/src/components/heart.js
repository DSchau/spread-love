import React from 'react'
import styled, { css } from 'react-emotion'

import { PULSE_ANIMATION } from '../style'

const Container = styled.span`
  display: inline-block;
  ${props =>
    props.animate &&
    css`
      animation: 2s infinite ${PULSE_ANIMATION}
        cubic-bezier(0.455, 0.03, 0.515, 0.955);
    `}
`

function Heart({ animate }) {
  return (
    <Container role="img" aria-label="Heart" animate={animate}>
      ❤️
    </Container>
  )
}

Heart.defaultProps = {
  animate: true,
}

export default Heart
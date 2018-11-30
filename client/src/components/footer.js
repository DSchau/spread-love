import React from 'react'
import styled from 'react-emotion'

import { position } from '../style'

const Container = styled.footer`
  box-sizing: border-box;
  background-color: #fffaf5;
  width: 100%;
  padding: 1rem 0.5rem;
  ${position.absolute({ bottom: true })}
`

export default function Footer({ children }) {
  return <Container>{children}</Container>
}

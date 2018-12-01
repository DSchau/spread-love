import React from 'react'
import styled from 'react-emotion'
import { FaGithub } from 'react-icons/fa'

import Link from './outbound-link'

import { position } from '../style'

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #fffaf5;
  border-top: 2px solid #c51104;
  width: 100%;
  padding: 1rem 0.5rem;
  ${position.absolute({ bottom: true })}
`

const GithubIcon = styled(FaGithub)`
  font-size: 24px;
`

export default function Footer() {
  return (
    <Container>
      <span>
        <GithubIcon />
      </span>
      <Link
        css={{ fontWeight: 'bold' }}
        href="https://twitter.com?q=#buildwithgatsby"
      >
        #buildwithgatsby
      </Link>
    </Container>
  )
}

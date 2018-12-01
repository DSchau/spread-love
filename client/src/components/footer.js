import React from 'react'
import styled from 'react-emotion'
import { FaGithub, FaStar } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'

import Link from './outbound-link'

import { mediaQuery, position } from '../style'

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

const MediumUp = styled.span`
  display: none;
  ${mediaQuery('medium')} {
    display: inline-block;
  }
`

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        {
          github {
            repository(owner: "dschau", name: "spread-love") {
              url
              stargazers {
                totalCount # for now!
              }
            }
          }
        }
      `}
      render={data => (
        <Container>
          <span css={{ display: 'flex' }}>
            <Link
              css={{ display: 'flex', alignItems: 'center' }}
              href={data.github.repository.url}
            >
              <FaGithub
                size={16}
                css={{
                  marginRight: '0.5rem',
                  verticalAlign: 'sub',
                }}
              />
              <MediumUp>Source on Github</MediumUp>
            </Link>
            <Link
              css={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '0.5rem',
              }}
              href={`${data.github.repository.url}/stargazers`}
            >
              <FaStar
                size={16}
                css={{
                  marginRight: '0.5rem',
                  verticalAlign: 'sub',
                }}
              />
              <span>{data.github.repository.stargazers.totalCount}</span>
            </Link>
          </span>
          <Link
            css={{ fontWeight: 'bold' }}
            href="https://twitter.com/search?q=%23buildwithgatsby&amp;src=typd&amp;lang=en"
          >
            #buildwithgatsby
          </Link>
        </Container>
      )}
    />
  )
}

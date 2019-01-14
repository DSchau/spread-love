import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'

const Container = styled.main`
  font-family: 'Montserrat', sans-serif;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Spread love; a simple Gatsby application to share what you love and what you are passionate about',
            },
            {
              name: 'keywords',
              content:
                'gatsby, web app, application, javascript, react, graphql, love',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {children}
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

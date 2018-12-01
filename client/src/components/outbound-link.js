import styled from 'react-emotion'

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

Link.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export default Link

import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

import Heart from './heart'

const Container = styled.div`
  font-family: monospace;
  font-size: 10vw;
`

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
`

const Body = styled.tbody``

const Row = styled.tr``
const Cell = styled.td`
  font-size: ${props => props.fontSize}px;
  padding: 2rem;
  text-align: center;
  background-color: ${props => `hsl(3, 100%, ${props.lightness}%)`};
  color: ${props => props.color};
  border: 0;
`

const Empty = () => (
  <Container>
    {`{...`}
    <Heart />
    {`}`}
  </Container>
)

class Love extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.items !== nextProps.items
  }

  render() {
    const { items } = this.props
    if (items.length === 0) {
      return <Empty />
    }

    const total = items.reduce((count, item) => {
      return count + item.count
    }, 0)

    const tableSize = Math.ceil(Math.sqrt(items.length))
    const clone = items.slice(0)

    return (
      <Table>
        <Body>
          {new Array(tableSize).fill(undefined).map((_, rowIndex) => {
            return (
              <Row key={rowIndex}>
                {new Array(tableSize).fill(undefined).map((__, colIndex) => {
                  const item = clone.shift()
                  if (!item) {
                    return null
                  }
                  const scale = 32 + (item.count / total) * 100
                  const lightness = Math.max(
                    35,
                    85 - (item.count / total) * 100
                  )
                  const color = lightness < 50 ? 'white' : 'black'
                  return (
                    <Cell
                      key={`${rowIndex}-${colIndex}`}
                      fontSize={scale}
                      lightness={lightness}
                      color={color}
                    >
                      {item.name}
                    </Cell>
                  )
                })}
              </Row>
            )
          })}
        </Body>
      </Table>
    )
  }
}

Love.defaultProps = {
  items: [],
}

Love.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      name: PropTypes.string,
    })
  ),
}

export default Love

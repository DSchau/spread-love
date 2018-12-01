import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

import Canvas from './canvas'
import Heart from './heart'

const Container = styled.div`
  font-family: monospace;
  font-size: 10vw;
`

const Empty = () => (
  <Container>
    {`{...`}
    <Heart />
    {`}`}
  </Container>
)

/*
 * TODO: implement fill algorithm
 */
function Love({ items }) {
  if (items.length === 0) {
    return <Empty />
  }

  const total = items.reduce((count, item) => {
    return count + item.count
  }, 0)

  return (
    <Canvas
      render={canvasArgs => {
        const { x, y, context } = canvasArgs

        const gridSize = Math.ceil(Math.sqrt(items.length))
        const clone = items.slice(0)

        for (let i = 0; i < gridSize; i++) {
          const blockSize = x / gridSize
          const xPos = (i / gridSize) * x

          for (let j = 0; j < gridSize; j++) {
            const yPos = (j / gridSize) * y

            const item = clone.shift()

            if (item) {
              context.fillStyle = 'red'
              context.fillRect(xPos / 2, yPos / 2, blockSize / 2, y / 2)
              context.fillStyle = 'black'
              context.fillText(
                item.name,
                (xPos + blockSize) / 4,
                (yPos + blockSize) / 2
              )
            }
          }
        }

        return null
      }}
    />
  )
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

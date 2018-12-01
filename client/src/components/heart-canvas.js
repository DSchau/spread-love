import React from 'react'
import Canvas from './canvas'

function HeartCanvas() {
  return (
    <Canvas>
      {({ context, x, y }) => {
        const NUM_ROWS = Math.ceil(Math.sqrt(x)) / 2
        const blockSize = Math.ceil(x / NUM_ROWS)

        for (let i = 0; i < NUM_ROWS; i++) {
          const x = i * blockSize
          const numCols = Math.ceil(y / blockSize)
          for (let j = 0; j < numCols; j++) {
            const y = j * blockSize
            const fontSize = Math.ceil(Math.sqrt(y / 2.5))
            context.font = `${fontSize}px sans-serif`
            context.fillStyle = `rgba(255, 255, 255, ${Math.random()})`
            context.fillText(String.fromCodePoint(0x2665), x / 2, y / 2)
          }
        }

        return null
      }}
    </Canvas>
  )
}

export default HeartCanvas

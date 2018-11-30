import React from 'react'
import styled from 'react-emotion'
import { MdSend } from 'react-icons/md'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
import { navigate } from 'gatsby'

import { Canvas, Heart, Footer } from '../components'
import { mediaQuery, position } from '../style'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
  background-color: #fe251b;
  overflow: hidden;
  position: relative;
`

const Header = styled.header`
  box-sizing: border-box;
  background-color: #fffaf5;
  width: 100%;
  padding: 1rem 0.25rem;
  ${position.absolute({ top: true })}
`

const Message = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
`

const Title = styled.h1`
  margin: 0;
  font-family: monospace;
  font-size: 72px;
  text-align: center;
`

const Form = styled.form({
  width: '100%',
  margin: '0 auto',
  position: 'relative',
  boxSizing: 'border-box',
  padding: '1rem',
  [mediaQuery('medium')]: {
    padding: '2rem',
  },
})

const Explanation = styled.h2({
  margin: 0,
  padding: 0,
  color: 'white',
  textAlign: 'center',
  padding: '0.5rem 0',
  margin: '0.5rem 0',
  border: '2px solid white',
  borderLeftWidth: 0,
  borderRightWidth: 0,
  fontSize: 16,
  [mediaQuery('medium')]: {
    fontSize: 20,
  },
  [mediaQuery('large')]: {
    fontSize: 24,
  },
})

const InputContainer = styled.div`
  display: flex;
`

const Input = styled.input`
  padding: 1rem;
  background-color: white;
  outline: 1px solid rgba(0, 0, 0, 1);
  width: 100%;
  font-size: 2rem;

  :focus {
    outline: 3px solid rgba(0, 0, 0, 1);
  }
`

Input.defaultProps = {
  type: 'text',
}

const Button = styled.button`
  background-color: #c51104;
  border: none;
  border-radius: none;
  outline: 1px solid black;

  color: white;
  font-size: 32px;
  padding: 1rem;

  :focus {
    outline-width: 3px;
  }
`

Button.defaultProps = {
  type: 'submit',
}

const handleSubmit = sendLove => {
  return ev => {
    ev.preventDefault()

    navigate('/love')
  }
}

function Index() {
  return (
    <Mutation
      mutation={gql`
        mutation SendLove($name: String!) {
          addLove(name: $name) {
            name
          }
        }
      `}
      children={sendLove => (
        <Container>
          <Canvas>
            {({ context, x, y }) => {
              const NUM_ROWS = 10 // x > 768 ? 25 : 15;
              const blockSize = Math.ceil(x / NUM_ROWS)
              const grid = new Array(NUM_ROWS)
                .fill(undefined)
                .map((_, index) =>
                  new Array(Math.ceil(y / blockSize))
                    .fill(undefined)
                    .map((_, yIndex) => [index * blockSize, yIndex * blockSize])
                )
              grid.forEach(row => {
                row.forEach(([x, y]) => {
                  context.font = `${y / 35}px sans-serif`
                  context.fillText('❤️', x / 2, y / 2)
                })
              })

              return null
            }}
          </Canvas>
          <Header>
            <Title>
              {`{...`}
              <Heart />
              {`}`}
            </Title>
          </Header>
          <Form onSubmit={handleSubmit(sendLove)}>
            <InputContainer>
              <Input />
              <Button>
                <MdSend />
              </Button>
            </InputContainer>
            <Explanation>
              What do you love? What fuels your fire? What are you passionate
              about? Share it!
            </Explanation>
          </Form>
          <Footer>
            <Message>#buildwithgatsby</Message>
          </Footer>
        </Container>
      )}
    />
  )
}

export default Index

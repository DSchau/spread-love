import React from 'react'
import styled from 'react-emotion'
import { MdSend } from 'react-icons/md'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
import { navigate } from 'gatsby'

import { HeartCanvas, Heart, Footer } from '../components'
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
  border-bottom: 2px solid #c51104;
  width: 100%;
  padding: 1rem 0.25rem;
  ${position.absolute({ top: true })}
`

const Title = styled.h1({
  margin: 0,
  fontFamily: 'monospace',
  textAlign: 'center',
  fontSize: 40,
  [mediaQuery('medium')]: {
    fontSize: 48,
  },
  [mediaQuery('large')]: {
    fontSize: 60,
  },
})

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
  padding: '0.5rem',
  margin: '0.5rem 0',
  lineHeight: 1.5,
  border: '4px solid #fffaf5',
  backgroundColor: 'black',
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
  border-radius: 0;
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
  border-radius: 0;
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

const MediumUp = styled.span({
  display: 'none',
  [mediaQuery('medium')]: {
    display: 'inline-block',
  },
})

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
          <HeartCanvas />
          <Header>
            <Title>
              {`{...`}
              <Heart />
              {`}`}
            </Title>
          </Header>
          <Form onSubmit={handleSubmit(sendLove)}>
            <InputContainer>
              <Input required={true} />
              <Button>
                <MdSend />
              </Button>
            </InputContainer>
            <Explanation>
              What do you love?{` `}
              <MediumUp>
                What fuels your fire? What are you passionate about?
              </MediumUp>{' '}
              Share it!
            </Explanation>
          </Form>
          <Footer />
        </Container>
      )}
    />
  )
}

export default Index

import React from 'react' // TODO: useState
import styled from '@emotion/styled'
import { MdSend } from 'react-icons/md'
// TODO: gql, Mutation
// TODO: navigate

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
  padding: '0.5rem',
  margin: '0.5rem 0',
  color: 'white',
  textAlign: 'center',
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

// h/t Donovan West from Amex.
function Index() {
  // TODO: set up useState and handleSubmit

  // TODO: wrap with Mutation and children prop
  // TODO: call navigate onCompleted
  return (
    <Container>
      <HeartCanvas />
      <Header>
        <Title>
          {`{...`}
          <Heart />
          {`}`}
        </Title>
      </Header>
      {/* TODO: handleSubmit */}
      <Form>
        <InputContainer>
          {/* TODO: value, onChange */}
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
  )
}

export default Index

import React, { Component } from 'react'
import styled from '@emotion/styled'
import debounce from 'lodash.debounce'

const Container = styled.canvas`
  overflow: hidden;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export default class Canvas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      context: null,
      x: 0,
      y: 0,
    }

    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    this.init()

    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    this.clear()
    window.removeEventListener('resize', this.handleResize)
  }

  shouldComponentUpdate(_, nextState) {
    return this.props.x !== nextState.x || this.props.y !== nextState.y
  }

  handleResize = debounce(() => {
    this.init()
  }, 25)

  init = () => {
    const canvas = this.canvas

    const maxX = window.innerWidth
    const maxY = window.innerHeight

    canvas.width = maxX * 2
    canvas.height = maxY * 2
    canvas.style.width = maxX
    canvas.style.height = maxY

    const context = canvas.getContext('2d')
    context.scale(2, 2)

    this.setState({
      context,
      x: maxX,
      y: maxY,
    })
  }

  clear = () => {
    const { context } = this.state

    context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  positionInScaledCanvas = points => points.map(point => point / 4)

  render() {
    const { children, render = children } = this.props
    const { context } = this.state
    return (
      <Container ref={node => (this.canvas = node)}>
        {context
          ? render({
              ...this.state,
              clear: this.clear,
              getPosition: this.positionInScaledCanvas,
            })
          : null}
      </Container>
    )
  }
}

const dimensions = {
  small: 0,
  medium: 500,
  large: 768,
  xlarge: 1024,
}

export const mediaQuery = breakpoint => {
  const size = dimensions[breakpoint]
  if (!size) {
    throw new Error(`The breakpoint ${breakpoint} was not found`)
  }

  return `@media only screen and (min-width: ${size}px)`
}

import { css } from '@emotion/core'

export const position = {
  absolute({ top = false, bottom = false }) {
    return css`
      position: absolute;
      left: 0;
      right: 0;
      ${top &&
        css`
          top: 0;
        `}
      ${bottom &&
        css`
          bottom: 0;
        `}
    `
  },
}

import styled, { css } from 'styled-components'
import { prop, switchProp } from 'styled-tools'

const Container = styled.label`
  ${switchProp('size', {
    small: css`
      min-width: ${prop('config.size.container.small')};
      min-height: ${prop('config.size.container.small')};
      width: ${prop('config.size.container.small')};
      height: ${prop('config.size.container.small')};
  `,
    medium: css`
      min-width: ${prop('config.size.container.medium')};
      min-height: ${prop('config.size.container.medium')};
      width: ${prop('config.size.container.medium')};
      height: ${prop('config.size.container.medium')};
  `,
    large: css`
      min-width: ${prop('config.size.container.large')};
      min-height: ${prop('config.size.container.large')};
      width: ${prop('config.size.container.large')};
      height: ${prop('config.size.container.large')};
  `
  })}
`

export default Container

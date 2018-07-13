import styled, { css } from 'styled-components'
import { prop, switchProp } from 'styled-tools'
import { Check } from 'styled-icons/fa-solid'

const Icon = styled(Check)`
  color: #FFF;
  
  ${switchProp('size', {
    small: css`
      width: ${prop('config.size.icon.small')};
      height: ${prop('config.size.icon.small')};
  `,
    medium: css`
      width: ${prop('config.size.icon.medium')};
      height: ${prop('config.size.icon.medium')};
  `,
    large: css`
      width: ${prop('config.size.icon.large')};
      height: ${prop('config.size.icon.large')};
  `
  })}
`

export default Icon

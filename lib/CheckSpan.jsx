import styled, { css } from 'styled-components'
import { prop, switchProp } from 'styled-tools'

const CheckSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${prop('config.colors.primary')};
  border-color: ${prop('config.colors.accent')};
  cursor: pointer;
  border-style: solid;
  transition: border .3s ease;

  ${switchProp('size', {
    small: css`
      border-width: 3px;
      width: ${prop('config.size.container.small')};
      height: ${prop('config.size.container.small')};
  `,
    medium: css`
      border-width: 4px;
      width: ${prop('config.size.container.medium')};
      height: ${prop('config.size.container.medium')};
  `,
    large: css`
      border-width: 5px;
      width: ${prop('config.size.container.large')};
      height: ${prop('config.size.container.large')};
  `
  })}

  &:hover {
    border-color: rgba(0,0,0,0.2);
  }
`

export default CheckSpan

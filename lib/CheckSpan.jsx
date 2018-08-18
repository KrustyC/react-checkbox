import styled, { css } from 'styled-components'
import { prop, switchProp, ifProp } from 'styled-tools'
import { checkspanTransition } from './transitions'

const CheckSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  border-style: solid;
  transition: border .3s ease;

  ${({ config: { colors } }) => css`
    background: ${ifProp({ checked: true }, colors.checked, colors.unchecked)};
    border-color: ${ifProp({ checked: true }, colors.checkedBorder, colors.uncheckedBorder)};
  `}

  ${({ checked }) => checked && css`
    animation: ${checkspanTransition} .3s cubic-bezier(0.895, 0.030, 0.685, 0.220) forwards;
    background: ${prop('config.colors.checked')};
    border-color: ${prop('config.colors.borderChecked')};
  `}

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

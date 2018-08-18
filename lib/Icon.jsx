import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp, prop, switchProp } from 'styled-tools'
import { Check } from 'styled-icons/fa-solid'
import { iconTransition } from './transitions'

const StyledCheck = styled(Check)`
  opacity: 0.3;
  color: black;
  ${({ checked }) => checked && css`
      opacity: 1;
      color: white;
      transform: scale(0);
      animation: ${iconTransition} .4s cubic-bezier(1.000, 0.008, 0.565, 1.650) .1s 1 forwards;
  `}
`

const Icon = styled.div`
  width: 100%;
  height: 100%;
  ${({ config: { colors } }) => css`
    color: ${ifProp({ checked: true }, colors.icon, 'transparent')};
  `}

  color: white !important;
  ${switchProp('size', {
    small: css`
      width: ${prop('config.size.icon.small')};
  `,
    medium: css`
      width: ${prop('config.size.icon.medium')};
  `,
    large: css`
      width: ${prop('config.size.icon.large')};
  `
  })}
`

const StyledIcon = ({ checked, ...rest }) => (
  <Icon checked={checked} {...rest}>
    <StyledCheck checked={checked} />
  </Icon>
)

StyledIcon.propTypes = {
  checked: PropTypes.bool.isRequired
}

export default StyledIcon

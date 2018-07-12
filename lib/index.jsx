import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import Svg from './check-solid.svg'
import { switchProp } from 'styled-tools'

const WHITE = '#FFFFFF'
const GRAY = '#D8D8D8'
const ACCENT = '#04B431'
const SMALL = '20px'
const MEDIUM = '30px'
const LARGE = '40px'

const check = keyframes`
  0% {
    transform: scale(0.8);
  }
  33% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    background: ${ACCENT};
    opacity: 1;
    border-color: ${ACCENT};
  }
`

const icon = keyframes`
  from {
      opacity: 0;
      transform: scale(0.3);
    }
    to {
      opacity: 1;
      transform: scale(1);
    } 
`

const Icon = styled.i`
  color: ${GRAY};
  transition: opacity .3s .1s ease;
  
  font-size: ${switchProp('size', {
    small: '5px',
    medium: '10px',
    large: '18px'
  })};
`
const Image = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  svg path {
    fill: #FFF !important;
  }
`

const Check = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${WHITE};
  cursor: pointer;
  border-style: solid;
  border-color: ${GRAY};
  transition: border .3s ease;
  ${switchProp('size', {
    small: css`
      border-width: 3px;
      width: ${SMALL};
      height: ${SMALL};
  `,
    medium: css`
      border-width: 4px;
      width: ${MEDIUM};
      height: ${MEDIUM};
  `,
    large: css`
      border-width: 5px;
      width: ${LARGE};
      height: ${LARGE};
  `
  })}
  &:hover {
    border-color: rgba(0,0,0,0.2);
  }
`

const Input = styled.input`
  display: none;
  &:checked + ${Check} {
    animation: ${check} .3s cubic-bezier(0.895, 0.030, 0.685, 0.220) forwards;
    ${Icon} {
      opacity: 1;
      color: white;
      transform: scale(0);
      animation: ${icon} .4s cubic-bezier(1.000, 0.008, 0.565, 1.650) .1s 1 forwards;
    }
  }
}
`

const Label = styled.label`
  ${switchProp('size', {
    small: css`
      min-width: ${SMALL};
      min-height: ${SMALL};
      width: ${SMALL};
      height: ${SMALL};
  `,
    medium: css`
      min-width: ${MEDIUM};
      min-height: ${MEDIUM};
      width: ${MEDIUM};
      height: ${MEDIUM};
  `,
    large: css`
      min-width: ${LARGE};
      min-height: ${LARGE};
      width: ${LARGE};
      height: ${LARGE};
  `
  })}
`

const Checkbox = ({ id, checked, size, onChange, ...rest }) => (
  <Label size={size} {...rest}>
    <Input
      id={id}
      type="checkbox"
      checked={checked ? 'checked' : ''}
      onChange={onChange}
    />
    <Check size={size}>
      <Icon className="fa fa-check" size={size}>
        <Image src={require('./check-solid.svg')} alt="tick-icon" />
        <svg
  aria-hidden="true"
  data-prefix="fas"
  data-icon="check"
  class="svg-inline--fa fa-check fa-w-16"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
>
  <path
    fill="currentColor"
    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
  >
  </path>
</svg>
      </Icon>
    </Check>
  </Label>
)

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Checkbox.defaultProps = {
  size: 'medium'
}

export default Checkbox

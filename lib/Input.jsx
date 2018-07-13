import styled from 'styled-components'

import { iconTransition, checkTransition } from './transitions'
import Icon from './Icon'
import Check from './Check'

const Input = styled.input`
  display: none;
  &:checked + ${Check} {
    animation: ${checkTransition} .3s cubic-bezier(0.895, 0.030, 0.685, 0.220) forwards;
    ${Icon} {
      opacity: 1;
      color: white;
      transform: scale(0);
      animation: ${iconTransition} .4s cubic-bezier(1.000, 0.008, 0.565, 1.650) .1s 1 forwards;
    }
  }
}
`

export default Input

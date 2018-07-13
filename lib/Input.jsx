import styled from 'styled-components'

import { iconTransition, checkspanTransition } from './transitions'
import Icon from './Icon'
import CheckSpan from './CheckSpan'

const Input = styled.input`
  display: none;
  &:checked + ${CheckSpan} {
    animation: ${checkspanTransition} .3s cubic-bezier(0.895, 0.030, 0.685, 0.220) forwards;
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

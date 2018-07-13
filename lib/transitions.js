import { keyframes } from 'styled-components'

export const checkTransition = keyframes`
  0% {
    transform: scale(0.8);
  }
  33% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    background: '#ddd';
    opacity: 1;
    border-color: '#ddd';
  }
`

export const iconTransition = keyframes`
  from {
      opacity: 0;
      transform: scale(0.3);
    }
    to {
      opacity: 1;
      transform: scale(1);
    } 
`

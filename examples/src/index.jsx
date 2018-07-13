
import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

import Default from './Default'

const Container = styled.div`
  height: 100vh;
`

const App = () => (
  <Container>
    <Default />
  </Container>
)

render(<App />, document.getElementById('root'))

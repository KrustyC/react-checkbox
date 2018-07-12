
import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

import Checkbox from '../../lib'

const Container = styled.div`
  height: 100vh;
`

const Row = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;

`

const App = () => (
  <Container>
    <Row>
      <Checkbox
        id="checkbox1"
        checked
      />
    </Row>
  </Container>
)

render(<App />, document.getElementById('root'))

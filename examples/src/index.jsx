
import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

import Default from './Default'
import Labelled from './Labelled'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${'' /* align-items: center; */}
`

const Subcontainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

const Section = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 40px;
`

const Subtitle = styled.h3`
  font-size: 24px;
`

const P = styled.p`
  font-size: 24px;
`

const App = () => (
  <Container>
    <Title>
      React Circle Checkbox
    </Title>
    <Subcontainer>
      <Section>
        <Subtitle>
          Default checkbox without labels
        </Subtitle>
        <Default />
      </Section>
      <Section>
        <Subtitle>
          Default checkbox with labels
        </Subtitle>
        <Labelled />
      </Section>
      <Section>
        <Subtitle>
          Customize checkbox with labels
        </Subtitle>
        <Default />
      </Section>
    </Subcontainer>
  </Container>
)

render(<App />, document.getElementById('root'))

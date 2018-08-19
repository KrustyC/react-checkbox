
// eslint-disable-next-line
import 'typeface-roboto'
import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'

import {
  Container, Section, Subtitle, Spacer
} from './components'
import Intro from './Intro'
import Default from './Default'
import Labelled from './Labelled'

// eslint-disable-next-line
injectGlobal`
 body {
   padding: 0;
   margin: 0;
   font-family: Roboto !important;
 }

 * {
   font-family: Roboto !important;
 }

 h1, h2, h3, h4, h5, h6, p, span {
  color: #545252;
  margin: 10px;
 }
`

const App = () => (
  <Container>
    <Intro />
    <div>
      <Section>
        <Subtitle>
          Default checkbox without labels
        </Subtitle>
        <Default />
      </Section>
      <Spacer />
      <Section>
        <Subtitle>
          Default checkbox with labels
        </Subtitle>
        <Labelled />
      </Section>
      <Spacer />
      <Section>
        <Subtitle>
          Customize checkbox with labels
        </Subtitle>
        <Default />
      </Section>
    </div>
  </Container>
)

render(<App />, document.getElementById('root'))

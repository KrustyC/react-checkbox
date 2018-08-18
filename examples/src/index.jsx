
import 'typeface-roboto'
import React from 'react'
import { render } from 'react-dom'
import styled, { injectGlobal } from 'styled-components'

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
 }
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15%;
  padding-right: 15%;
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
  font-size: 16px;
`

const App = () => (
  <Container>
    <Title>
      React Checkbox
    </Title>
    <P>
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
    professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
     discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
     "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. #
     This book is a treatise on the theory of ethics, very popular during the Renaissance. 
     The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    </P>
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

import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import { prism } from 'react-syntax-highlighter/styles/prism'

registerLanguage('jsx', jsx)

 
// registerLanguage('jsx', jsx);

const HighlighterContainer = styled.div`
  margin-top: 10px;
  width: 100%;
`

const CodeHighlighter = styled(SyntaxHighlighter)`
  span {
    margin: 0px;
  }
`

export const Highlights = ({ children }) => (
  <HighlighterContainer>
    <CodeHighlighter
      language="jsx"
      style={prism}
    >
      {children}
    </CodeHighlighter>
  </HighlighterContainer>
)

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const Column = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15%;
  padding-right: 15%;
`

export const Subcontainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

export const Section = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 40px;
`

export const Subtitle = styled.h3`
  font-size: 24px;
`

export const Heading = styled.h5`
  font-size: 18px;
  font-weight: bold;
`

export const P = styled.p`
  font-size: 16px;
`

export const Spacer = styled.hr`
  margin: 30px;
  background-color: #DDDBDB;
  border: 0px;
  width: 100%;
  height: 3px;
`

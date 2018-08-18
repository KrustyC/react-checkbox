
import React, { Fragment } from 'react'

import { Highlights, Title, P } from './components'

const snippet = `import React from 'react'
import Checkbox from '@krustyc/react-checkbox'

class Form extends Component {
  state = {
    checkbox: true
  }

  onToggle = () => this.setState(prevState => ({ checkbox: !prevState.checkbox }))

  render() {
    return (
      <Checkbox id="checkbox" onChange={this.onToggle} checked={this.state.checkbox} />
    )
  } 
}
`

export default () => (
  <Fragment>
    <Title>
      React Checkbox
    </Title>
    <P>
      React animated checkbox built with styled-components.
    </P>
    <Highlights>
      {snippet}
    </Highlights>
  </Fragment>
)


import React, { Component } from 'react'
import Row from './Row'

import Checkbox from '../../lib'

export default class Default extends Component {
  state = {
    checkbox1: true,
    checkbox2: false,
    checkbox3: true
  }

  onToggle = ({ target: { id } }) => this.setState(prevState => ({ [id]: !prevState[id] }))

  render() {
    const { checkbox1, checkbox2, checkbox3 } = this.state

    return (
      <Row>
        <Checkbox
          id="checkbox1"
          onChange={this.onToggle}
          checked={checkbox1}
          size="small"
        />
        <Checkbox
          id="checkbox2"
          onChange={this.onToggle}
          checked={checkbox2}
        />
        <Checkbox
          id="checkbox3"
          onChange={this.onToggle}
          checked={checkbox3}
          size="large"
        />
      </Row>
    )
  }
}

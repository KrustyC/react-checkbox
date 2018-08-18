
import React, { Component } from 'react'
import { Column, Row } from './components'

import Checkbox from '../../lib'

export default class Default extends Component {
  state = {
    checkbox1: true,
    checkbox2: false,
    checkbox3: true,
    checkbox4: true,
    checkbox5: false,
    checkbox6: true
  }

  onToggle = ({ target: { id } }) => this.setState(prevState => ({ [id]: !prevState[id] }))

  render() {
    const {
      checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6
    } = this.state

    return (
      <Row>
        <Column>
          <Checkbox
            id="checkbox1"
            onChange={this.onToggle}
            checked={checkbox1}
            text="Small Rounded Checkbox"
            size="small"
          />
          <Checkbox
            squared
            id="checkbox2"
            onChange={this.onToggle}
            checked={checkbox2}
            text="Small Squared Checkbox"
            size="small"
          />
        </Column>
        <Column>
          <Checkbox
            id="checkbox3"
            onChange={this.onToggle}
            checked={checkbox3}
            text="Medium Rounded Checkbox"
          />
          <Checkbox
            id="checkbox4"
            onChange={this.onToggle}
            squared
            checked={checkbox4}
            text="Medium Squared Checkbox"
          />
        </Column>
        <Column>
          <Checkbox
            id="checkbox5"
            onChange={this.onToggle}
            checked={checkbox5}
            text="Large Rounded Checkbox"
            size="large"
          />
          <Checkbox
            id="checkbox6"
            onChange={this.onToggle}
            squared
            checked={checkbox6}
            text="Large Squared Checkbox"
            size="large"
          />
        </Column>
      </Row>
    )
  }
}

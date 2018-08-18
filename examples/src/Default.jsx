
import React, { Component } from 'react'
import { Heading, P, Row, Column } from './components'

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
    const { checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6 } = this.state

    return (
      <Column>
        <P>
          The default The default The default The default The default The default The default The default
          The default The default The default The default The default The default The default The default
          The default The default The default The default The default The default The default The default
        </P>
        <Heading>Rounded</Heading>
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
        <Heading>Squared</Heading>
        <Row>
          <Checkbox
            squared
            id="che\ckbox4"
            onChange={this.onToggle}
            checked={checkbox4}
            size="small"
          />
          <Checkbox
            squared
            id="checkbox5"
            onChange={this.onToggle}
            checked={checkbox5}
          />
          <Checkbox
            squared
            id="checkbox6"
            onChange={this.onToggle}
            checked={checkbox6}
            size="large"
          />
        </Row>
      </Column>
    )
  }
}

import React from 'react'
import PropTypes from 'prop-types'

import defaultConfig from './defaultConfig'
import Container from './Container'
import CheckSpan from './CheckSpan'
import Input from './Input'
import Icon from './Icon'

// @TODO Move config to a provider
// @TODO Handle config merge
const Checkbox = ({
  id, checked, size, onChange, ...rest
}) => (
  <Container size={size} config={defaultConfig} {...rest}>
    <Input
      id={id}
      type="checkbox"
      checked={checked ? 'checked' : ''}
      onChange={(onChange)}
      config={defaultConfig}
    />
    <CheckSpan checked={checked} size={size} config={defaultConfig}>
      <Icon size={size} config={defaultConfig} checked={checked} />
    </CheckSpan>
  </Container>
)

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Checkbox.defaultProps = {
  size: 'medium'
}

export default Checkbox

// @TODO EXPORT AS STYLED COMPONENTS

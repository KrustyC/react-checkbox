import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import defaultConfig from './defaultConfig'
import CheckSpan from './CheckSpan'
import Icon from './Icon'

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
`

const Text = styled.span`
  margin-left: 10px;
`

const Input = styled.input`
  display: none;
`

// @TODO Handle config merge
const Checkbox = ({
  id, checked, text, squared, size, onChange
}) => (
  <Main defaultConfig={defaultConfig}>
    <label htmlFor={id}>
      <Input
        id={id}
        type="checkbox"
        checked={checked ? 'checked' : ''}
        onChange={(onChange)}
        config={defaultConfig}
      />
      <CheckSpan squared={squared} checked={checked} size={size} config={defaultConfig}>
        <Icon size={size} checked={checked} config={defaultConfig} />
      </CheckSpan>
    </label>
    {text && (
      <Text>
        {text}
      </Text>
    )}
  </Main>
)

Checkbox.propTypes = {
  text: PropTypes.string,
  squared: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

Checkbox.defaultProps = {
  size: 'medium',
  squared: false,
  text: null
}

export default Checkbox

// @TODO EXPORT AS STYLED COMPONENTS

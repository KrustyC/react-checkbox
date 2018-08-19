# react-checkbox
> React checkbox created with styled-components

*Here only a small descritpion is provided, if you want to check a more accurated documentation please checkout the [(Demo)](https://krustyc.github.io/react-checkbox/)*
  

# Motivation
While I was working on [Muso](https://gomuso.io/) I was looking for a nice, simple and possible animated checkbox but aftear hours of searching I couldn't find anything nice, so I decided to built it on my own.

This library provides an animated checkbox, in two different shapes(rounded, squared).

* Currently the style can not be customised, but that it's at the top of my todo lis!*

## Installation
```
npm save @krustyc/react-checkbox
or
yarn add @krustyc/react-checkbox
```

## Usage
The library does not provide any behaviour on the state of the checkbox as I wanted to give back to the user the control on it. The easiest implementation would be something like the code below.

```jsx
import React, { Component } from 'react'
import Checkbox from '@krustyc/react-checkbox'

export default class Form extends Component {
  state = {
    checked: false
  }
  
  onChange = () => this.setState(prevState => ({ checked: !prevState.checked })
  
  render() {
    return (
      <Checkbox id="checkbox" onChange={this.onChange} checked={this.state.checked} />
    )
  }
}
```

## Contributing
Feel free to cnotribute if you want to improve it or solve an issue.
Please always check linting (`yarn lint`) and test (`yarn test`) before pushing.

Submit a PR from a branch named `fix/meaningful-name` or `feature/meaningful-name`. Not from master.
Please provide meaningful commit messages. If needed, squash commits before opening your PR.

## Todos
- [ ] Customisable style configruation (colors, sizes, etc...)
- [ ] Add CircleCI
- [ ] Add Tests

## Credits
- Davide Crestini

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (©) 2018-present, Davide Crestini


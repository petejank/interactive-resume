import React from 'react'
import {shallow} from 'enzyme'

describe('Person', () => {
  it('renders <Person />', () => {
    const component = render()

    expect(component).toMatchSnapshot()
  })

  function render() {
    const defaultProps = {
      personClass: 'boy1-briefcase',
      children: 'Some children text'
    }
    const Person = require('.').default

    return shallow(<Person {...defaultProps} />)
  }
})

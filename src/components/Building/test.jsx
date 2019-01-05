import React from 'react'
import {shallow} from 'enzyme'

describe('Building', () => {
  it('renders <Building />', () => {
    const component = render()

    expect(component).toMatchSnapshot()
  })

  function render() {
    const defaultProps = {
      buildingClass: 'welcome',
      children: 'Some child text'
    }
    const Building = require('.').default

    return shallow(<Building {...defaultProps} />)
  }
})

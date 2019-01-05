import React from 'react'
import {shallow} from 'enzyme'

describe('Vehicle', () => {
  it('renders <Vehicle />', () => {
    const component = render()

    expect(component).toMatchSnapshot()
  })

  function render() {
    const defaultProps = {
      vehicleClass: 'batmobil'
    }
    const Vehicle = require('.').default

    return shallow(<Vehicle {...defaultProps} />)
  }
})

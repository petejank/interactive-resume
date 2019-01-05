import React from 'react'
import {shallow} from 'enzyme'

describe('Player', () => {
  it('renders <Player />', () => {
    const component = render()

    expect(component).toMatchSnapshot()
  })

  function render() {
    const defaultProps = {
      playerCar: 'batmobil'
    }
    const Player = require('.').default

    return shallow(<Player {...defaultProps} />)
  }
})

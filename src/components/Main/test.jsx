import React from 'react'
import {shallow} from 'enzyme'

describe('MainContainer', () => {
  it('renders <MainContainer />', () => {
    const component = render()

    expect(component).toMatchSnapshot()
  })

  context('when <CarPicker /> was clicked', () => {
    it('sets `state.playerCar` to passed value', () => {
      const component = render()
      component.find('CarPicker').prop('pickCarHandler')('batmobil')
      component.update()

      expect(component.state().playerCar).toBe('batmobil')
    })
  })

  function render() {
    const MainContainer = require('.').default

    return shallow(<MainContainer />)
  }
})

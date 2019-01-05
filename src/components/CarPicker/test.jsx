import React from 'react'
import {shallow} from 'enzyme'

describe('CarPicker', () => {
  it('renders <CarPicker />', () => {
    const component = render()

    expect(component).toMatchSnapshot()
  })

  context('when <CarPickerPick /> with `prop.pickerClass` equal "atruck" was clicked', () => {
    it('calls #props.pickCarHandler', () => {
      const pickCarHandler = jest.fn()
      const component = render({pickCarHandler})
      component.find('CarPickerPick[pickerClass="atruck"]').prop('pickCarHandler')()

      expect(pickCarHandler).toHaveBeenCalledTimes(1)
    })
  })

  context('when <CarPickerPick /> with `prop.pickerClass` equal "batmobil" was clicked', () => {
    it('calls #props.pickCarHandler', () => {
      const pickCarHandler = jest.fn()
      const component = render({pickCarHandler})
      component.find('CarPickerPick[pickerClass="batmobil"]').prop('pickCarHandler')()

      expect(pickCarHandler).toHaveBeenCalledTimes(1)
    })
  })

  context('when `props.hide` is `true`', () => {
    it('renders <CarPicker /> with "car-picker--hide" class', () => {
      const component = render({hide: true})

      expect(component).toMatchSnapshot()
    })
  })

  function render(props = {}) {
    const defaultProps = {
      pickCarHandler: () => {},
      hide: false
    }
    const CarPicker = require('.').default

    return shallow(<CarPicker {...defaultProps} {...props} />)
  }
})

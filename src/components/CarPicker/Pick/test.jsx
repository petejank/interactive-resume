import React from 'react'
import {shallow} from 'enzyme'

describe('CarPickerPick', () => {
  it('renders <CarPickerPick />', () => {
    const component = render()

    expect(component).toMatchSnapshot()
  })

  context('when <button.car-picker-pick__button /> was clicked', () => {
    it('calls #handleButtonClick', () => {
      const pickCarHandler = jest.fn()
      const component = render({pickCarHandler})
      component.find('.car-picker-pick__button').prop('onClick')()

      expect(pickCarHandler).toHaveBeenCalledWith('batmobil')
    })
  })

  function render(props = {}) {
    const defaultProps = {
      pickCarHandler: () => {},
      pickerClass: 'batmobil'
    }
    const CarPickerPick = require('.').default

    return shallow(<CarPickerPick {...defaultProps} {...props} />)
  }
})

import React from 'react'
import {shallow} from 'enzyme'

describe('TooltipModal', () => {
  it('renders <TooltipModal />', () => {
    const component = render()

    expect(component).toMatchSnapshot()
  })

  context('when <button /> was clicked', () => {
    let component

    beforeEach(() => {
      component = render()
      component.find('button').prop('onClick')()
      component.update()
    })

    it('shows modal', () => {
      expect(component).toMatchSnapshot()
    })

    context('when <Modal /> #prop.onExited was called', () => {
      it('hides modal', () => {
        component.find('Modal').prop('onExited')()
        component.update()

        expect(component).toMatchSnapshot()
      })
    })
  })

  function render(props = {}) {
    const defaultProps = {
      tooltipText: 'Some tooltip text',
      children: 'Some children text',
      modalClass: 'Some modal class',
      additionalClass: 'Some tooltip class',
      enterCallback: () => {}
    }
    const TooltipModal = require('.').default

    return shallow(<TooltipModal {...defaultProps} {...props} />)
  }
})

import React from 'react'
import {shallow} from 'enzyme'

describe('Modal', () => {
  it('renders <Modal />', () => {
    const component = render()

    expect(component).toMatchSnapshot()
  })

  context('when <ReactModal /> #prop.onHide was triggered', () => {
    it('sets `state.showModal` to `false`', () => {
      const component = render()
      component.find('Modal').prop('onHide')()
      component.update()

      expect(component.state().showModal).toBe(false)
    })
  })

  context('when <ReactModal /> #prop.onExited was triggered', () => {
    it('calls #props.onExited', () => {
      const onExited = jest.fn()
      const component = render({onExited})
      component.find('Modal').prop('onExited')()

      expect(onExited).toHaveBeenCalledTimes(1)
    })
  })

  context('when <ReactModal /> #prop.onEnter was triggered', () => {
    it('calls #props.onEnter', () => {
      const onEnter = jest.fn()
      const component = render({onEnter})
      component.find('Modal').prop('onEnter')()

      expect(onEnter).toHaveBeenCalledTimes(1)
    })
  })

  function render(props = {}) {
    const defaultProps = {
      children: 'Some children text',
      modalClass: 'SomeModalClass',
      onExited: () => {},
      onEnter: () => {}
    }
    const Modal = require('.').default

    return shallow(<Modal {...defaultProps} {...props} />)
  }
})

import React from 'react'
import {mount} from 'enzyme'

jest.useFakeTimers()
jest.mock('./utils/backgroundScroll')

describe('Background', () => {
  context('when device is not mobile', () => {
    beforeEach(() => {
      jest.doMock('utils/isMobile', () => () => false)
    })

    it('renders <Background />', () => {
      const component = render()

      expect(component).toMatchSnapshot()
    })

    context('when `props.playerCar` has changed', () => {
      context('when window was scrolled', () => {
        let component, backgroundScroll

        beforeEach(() => {
          global.window.addEventListener = jest.fn((event, fn) => event === 'scroll' && fn())
          backgroundScroll = require('./utils/backgroundScroll').default

          component = render()
          component.setProps({playerCar: 'batmobil'})
          jest.runAllTimers()
          component.update()
        })

        it('removes "background__scroll-info"', () => {
          expect(component).toMatchSnapshot()
        })

        it('calls `backgroundScroll`', () => {
          expect(backgroundScroll).toHaveBeenCalledWith(component.instance().backgroundElmRef.current)
        })
      })
    })
  })

  context('when device is mobile', () => {
    beforeEach(() => {
      jest.doMock('utils/isMobile', () => () => true)
    })

    it('renders <Background /> with mobile controls', () => {
      const component = render()

      expect(component).toMatchSnapshot()
    })

    context('when <button.background__arrow--right /> was clicked', () => {
      let component

      beforeEach(() => {
        component = render()
        component.find('.background__arrow--right').prop('onClick')()
        jest.runAllTimers()
        component.update()
      })

      it('moves <Background /> forward and removes "background__scroll-info"', () => {
        expect(component).toMatchSnapshot()
      })

      context('when <button.background__arrow--left /> was clicked', () => {
        it('moves <Background /> backward', () => {
          component.find('.background__arrow--left').prop('onClick')()
          component.update()

          expect(component).toMatchSnapshot()
        })
      })
    })
  })

  function render(props = {}) {
    const defaultProps = {
      children: 'Some child text'
    }
    const Background = require('.').default

    return mount(<Background {...defaultProps} {...props} />)
  }
})

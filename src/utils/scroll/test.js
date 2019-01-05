describe('scroll', () => {
  let scroll

  beforeEach(() => {
    global.window.pageYOffset = 20
    global.document.documentElement.scrollTop = 30
    Object.defineProperty(global.document.documentElement, 'clientHeight', {value: 800})
    Object.defineProperty(global.document.body, 'scrollHeight', {value: 900})

    scroll = require('.').default
  })

  describe('#getScrollY', () => {
    it('returns `window.pageYOffset`', () => {
      expect(scroll.getScrollY()).toBe(20)
    })

    context('when `window.pageYOffset` is not set', () => {
      it('returns `document.documentElement.scrollTop`', () => {
        global.window.pageYOffset = null

        expect(scroll.getScrollY()).toBe(30)
      })
    })
  })

  describe('#getMaxScrollY', () => {
    it('returns maximum scroll range', () => {
      expect(scroll.getMaxScrollY()).toBe(100)
    })
  })

  describe('#getScrollCompletion', () => {
    it('returns scroll decimal completion', () => {
      expect(scroll.getScrollCompletion()).toBe(0.2)
    })
  })
})

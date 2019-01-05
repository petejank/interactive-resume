jest.mock('utils/scroll', () => ({
  getScrollCompletion: () => 0.5
}))

describe('backgroundScroll', () => {
  it('add `translate3d` style to passed element', () => {
    const backgroundElm = {}
    const backgroundScroll = require('.').default
    backgroundScroll(backgroundElm)

    expect(backgroundElm).toEqual({
      style: 'transform: translate3d(-1852.5px, -926px, 0)'
    })
  })
})

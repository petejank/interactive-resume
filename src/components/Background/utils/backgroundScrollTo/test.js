import backgroundScrollTo from '.'
import * as constants from '../../constants'

describe('backgroundScrollTo', () => {
  beforeEach(() => {
    backgroundScrollTo.resetIndex()
  })

  it('move forward and backward by one', () => {
    expect(backgroundScrollTo.moveForward()).toBe(1)
    expect(backgroundScrollTo.moveForward()).toBe(2)
    expect(backgroundScrollTo.moveForward()).toBe(3)
    expect(backgroundScrollTo.moveForward()).toBe(4)
    expect(backgroundScrollTo.moveForward()).toBe(5)
    expect(backgroundScrollTo.moveForward()).toBe(6)
    expect(backgroundScrollTo.moveForward()).toBe(7)
    expect(backgroundScrollTo.moveForward()).toBe(8)
    expect(backgroundScrollTo.moveBackward()).toBe(7)
    expect(backgroundScrollTo.moveBackward()).toBe(6)
    expect(backgroundScrollTo.moveBackward()).toBe(5)
    expect(backgroundScrollTo.moveBackward()).toBe(4)
    expect(backgroundScrollTo.moveBackward()).toBe(3)
    expect(backgroundScrollTo.moveBackward()).toBe(2)
    expect(backgroundScrollTo.moveBackward()).toBe(1)
    expect(backgroundScrollTo.moveBackward()).toBe(0)
  })

  context('when reached last index', () => {
    it("move forward won't exceed max length", () => {
      const overloadedIndex = constants.BACKGROUND_WRAPPER_SUBCLASSES.length + 1
      for (let i = 0; i < overloadedIndex; i++) {
        backgroundScrollTo.moveForward()
      }

      expect(backgroundScrollTo.getIndex()).toBe(constants.BACKGROUND_WRAPPER_SUBCLASSES.length - 1)
    })
  })

  context('when at initial index', () => {
    it("move backward won't go below 0", () => {
      backgroundScrollTo.moveBackward()

      expect(backgroundScrollTo.getIndex()).toBe(0)
    })
  })
})

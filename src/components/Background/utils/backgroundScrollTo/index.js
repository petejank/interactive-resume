'use strict'

import * as constants from '../../constants'

let currentIndex = 0

export default {
  moveForward() {
    const lastIndex = constants.BACKGROUND_SUBCLASSES.length - 1
    return (currentIndex === lastIndex ? lastIndex : ++currentIndex)
  },
  moveBackward() {
    return currentIndex === 0 ? 0 : --currentIndex
  },
  resetIndex() {
    currentIndex = 0
    return currentIndex
  },
  getIndex() {
    return currentIndex
  }
}

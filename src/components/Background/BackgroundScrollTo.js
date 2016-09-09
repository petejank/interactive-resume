'use strict';

import * as Constants from './Constants';

let currentIndex = 0;

export default {
  moveForward() {
    const lastIndex = Constants.BACKGROUND_SUBCLASSES.length - 1;
    return (currentIndex === lastIndex ? lastIndex : ++currentIndex);
  },
  moveBackward() {
    return currentIndex === 0 ? 0 : --currentIndex;
  },
  resetIndex() {
    return currentIndex = 0;
  },
  getIndex() {
    return currentIndex;
  }
};

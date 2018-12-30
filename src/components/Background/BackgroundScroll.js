'use strict';

import scroll from 'other/scroll';
import * as Constants from './Constants';

export default (backgroundElm) => {
  backgroundElm.style = `transform: translate3d(${scroll.getScrollCompletion() * Constants.SCROLL_MAX_LEFT}px, ${scroll.getScrollCompletion() * Constants.SCROLL_MAX_TOP}px, 0)`
};

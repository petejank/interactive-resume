'use strict';

import {$window} from 'other/window';
import {$document} from 'other/document';

export default {
  getScrollY() {
    return $window.scrollTop();
  },
  getMaxScrollY() {
    return $document.height() - $window.height();
  },
  getScrollCompletion() {
    return this.getScrollY() / this.getMaxScrollY();
  },
  resetScroll() {
    // Basically a workaround to reset scroll position on possible next page load
    $window.on('beforeunload', () => {
       $window.scrollTop(0);
    });
  }
};

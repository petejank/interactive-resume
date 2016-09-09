'use strict';

import window from 'other/window';

const PAGE_CONTEXT_CENTER_MOD = 450;
const NEW_OFFSET_FIX = 20;

export default (playerOffsets) => {
  const halfScreenX = window.innerWidth / 2;
  const centeredOffsetLeft = halfScreenX - (playerOffsets.left + (playerOffsets.width / 2)) - PAGE_CONTEXT_CENTER_MOD;

  const newOffsetLeft = playerOffsets.left + centeredOffsetLeft;
  // Don't allow new left offset values lower than zero
  return (!Math.max(0, newOffsetLeft) ? centeredOffsetLeft - newOffsetLeft + NEW_OFFSET_FIX : centeredOffsetLeft) + 'px';
}

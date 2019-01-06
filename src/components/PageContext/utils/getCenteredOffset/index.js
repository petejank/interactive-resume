import isMobile from 'utils/isMobile'

const LEFT_CENTER_MOD = 300
const LEFT_MOBILE_CENTER_MOD = 60
const NEW_OFFSET_FIX = 20

// TODO:
// Add modifier for top position
export default (playerOffsets) => {
  const leftCenterMod = isMobile() ? LEFT_MOBILE_CENTER_MOD : LEFT_CENTER_MOD
  const halfScreenX = window.innerWidth / 2
  const offsetLeft = halfScreenX - (playerOffsets.left + (playerOffsets.width / 2)) - leftCenterMod

  const newOffsetLeft = playerOffsets.left + offsetLeft
  // Don't allow new left offset values lower than zero
  return {
    left: `${!Math.max(0, newOffsetLeft) ? offsetLeft - newOffsetLeft + NEW_OFFSET_FIX : offsetLeft}px`
  }
}

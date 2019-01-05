import scroll from 'utils/scroll'

const SCROLL_MAX_LEFT = -3705
const SCROLL_MAX_TOP = -1852

export default (backgroundElm) => {
  const scrollBase = scroll.getScrollCompletion()
  backgroundElm.style = `transform: translate3d(${scrollBase * SCROLL_MAX_LEFT}px, ${scrollBase * SCROLL_MAX_TOP}px, 0)`
}

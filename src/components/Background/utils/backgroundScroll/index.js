import scroll from 'other/scroll'
import * as constants from '../../constants'

export default (backgroundElm) => {
  backgroundElm.style = `transform: translate3d(
    ${scroll.getScrollCompletion() * constants.SCROLL_MAX_LEFT}px,
    ${scroll.getScrollCompletion() * constants.SCROLL_MAX_TOP}px,
    0
  )`
}

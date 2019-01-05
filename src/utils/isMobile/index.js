const MIN_MOBILE_DISPLAY_RES = 1024

export default () => {
  return window.screen.width < MIN_MOBILE_DISPLAY_RES && (window['ontouchstart'] || window.navigator.msMaxTouchPoints)
}

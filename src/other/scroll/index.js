export default {
  getScrollY() {
    return window.pageYOffset || document.documentElement.scrollTop
  },
  getMaxScrollY() {
    const {body, documentElement: html} = document
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
    const windowHeight = Math.max(html.clientHeight, window.innerHeight || 0)

    return docHeight - windowHeight
  },
  getScrollCompletion() {
    return this.getScrollY() / this.getMaxScrollY()
  },
  resetScroll() {
    // Basically a workaround to reset scroll position on possible next page load
    window.addEventListener('beforeunload', (event) => {
      window.scrollTo(0, 0)
    })
  }
}

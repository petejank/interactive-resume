import React, {PropTypes, PureComponent} from 'react'

import store from 'store'
import backgroundScroll from './utils/backgroundScroll'
import backgroundScrollTo from './utils/backgroundScrollTo'

import * as constants from './constants'

export default class Background extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    arrowInterface: true,
    initialDisplay: true,
    backgroundClass: ''
  }

  componentWillMount() {
    const unsubscribe = store.subscribe(() => {
      if (store.getState().playerState.playerCar) {
        // Desktop interface
        if (window.screen.width >= constants.BACKGROUND_MIN_ARROW_DISPLAY_RES
          && !('ontouchstart' in window || window.navigator.msMaxTouchPoints)) {
          this.setState({arrowInterface: false})

          window.addEventListener('scroll', (event) => {
            if (this.state.initialDisplay) {
              this._removeInfo()
            }

            backgroundScroll(this.backgroundElm)
          })
        }

        unsubscribe()
      }
    })
  }

  render() {
    return (
      <div className={'background ' + this.state.backgroundClass}
        ref={(backgroundElm) => {this.backgroundElm = backgroundElm}}>
        {this._bottomScreenInterface()}
        {this.props.children}
      </div>
    )
  }

  move(direction) {
    const directionFunction = `move${direction}`

    this.setState({
      backgroundClass: `${constants.BACKGROUND_PREFIX}${constants.BACKGROUND_SUBCLASSES[backgroundScrollTo[directionFunction]()]}`
    })

    if (this.state.initialDisplay) {
      this._removeInfo()
    }
  }

  _bottomScreenInterface() {
    if (this.state.arrowInterface) {
      return (
        <div>
          <a className='background__arrow background__arrow--left' onClick={() => this.move('Backward')} />
          <div className='background__scroll-info background__scroll-info--mobile'
            ref={(backgroundInterfaceInfo) => {this.backgroundInterfaceInfo = backgroundInterfaceInfo}}>
              Tap these arrows to move
          </div>
          <a className='background__arrow background__arrow--right' onClick={() => this.move('Forward')} />
        </div>
      )
    }

    return (
      <div className='background__scroll-info'
        ref={(backgroundInterfaceInfo) => {this.backgroundInterfaceInfo = backgroundInterfaceInfo}}>
          Scroll to move the car
      </div>
    )
  }

  _removeInfo() {
    this.setState({initialDisplay: false})
    // Remove scroll info
    window.setTimeout(() => {
      this.backgroundInterfaceInfo.parentNode.removeChild(this.backgroundInterfaceInfo)
    }, constants.BACKGROUND_INFO_TIMEOUT)
  }
}

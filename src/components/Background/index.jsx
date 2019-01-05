import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'

import backgroundScroll from './utils/backgroundScroll'
import backgroundScrollTo from './utils/backgroundScrollTo'
import isMobile from 'utils/isMobile'
import * as constants from './constants'

export default class Background extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    playerCar: PropTypes.string
  }

  state = {
    arrowInterface: isMobile(),
    navigationHint: true,
    backgroundWrapperClass: ''
  }

  componentDidUpdate(prevProps) {
    // Prevents calling this update multiple times
    if (this.props.playerCar !== prevProps.playerCar && !this.state.arrowInterface) {
      // Only for desktop interface
      window.addEventListener('scroll', () => {
        if (this.state.navigationHint) {
          this._removeInfo()
        }

        backgroundScroll(this.refs.backgroundElm)
      })
    }
  }

  render() {
    return (
      <div className='background'>
        <div className={'background__wrapper' + this.state.backgroundWrapperClass} ref='backgroundElm'>
          {this.props.children}
        </div>
        {this._bottomScreenInterface()}
      </div>
    )
  }

  move(direction) {
    const subclass = backgroundScrollTo[`move${direction}`]()

    this.setState({
      backgroundWrapperClass: ` ${constants.BACKGROUND_WRAPPER_PREFIX}${constants.BACKGROUND_WRAPPER_SUBCLASSES[subclass]}`
    })

    if (this.state.navigationHint) {
      this._removeInfo()
    }
  }

  _bottomScreenInterface() {
    if (this.state.arrowInterface) {
      return (
        <Fragment>
          <button className='background__arrow background__arrow--left' onClick={() => this.move('Backward')} />
          <div className='background__scroll-info background__scroll-info--mobile' ref='backgroundInterfaceInfo'>
              Tap these arrows to move
          </div>
          <button className='background__arrow background__arrow--right' onClick={() => this.move('Forward')} />
        </Fragment>
      )
    }

    return (
      <div className='background__scroll-info' ref='backgroundInterfaceInfo'>
          Scroll to move the car
      </div>
    )
  }

  _removeInfo() {
    this.setState({navigationHint: false})
    // Remove scroll info
    window.setTimeout(() => {
      const {backgroundInterfaceInfo} = this.refs
      backgroundInterfaceInfo.parentNode.removeChild(backgroundInterfaceInfo)
    }, constants.BACKGROUND_INFO_TIMEOUT)
  }
}

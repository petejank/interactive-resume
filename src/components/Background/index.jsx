import React, {PureComponent, Fragment, createRef} from 'react'
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
    navigationHintVisible: true,
    backgroundWrapperClass: ''
  }

  constructor(props) {
    super(props)

    this.backgroundElmRef = createRef()
  }

  componentDidUpdate(prevProps) {
    // Prevents calling this update multiple times
    if (this.props.playerCar !== prevProps.playerCar && !this.state.arrowInterface) {
      // Only for desktop interface
      window.addEventListener('scroll', () => {
        this._removeInfo()
        backgroundScroll(this.backgroundElmRef.current)
      })
    }
  }

  render() {
    return (
      <div className='background'>
        <div className={'background__wrapper' + this.state.backgroundWrapperClass} ref={this.backgroundElmRef}>
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

    this._removeInfo()
  }

  _bottomScreenInterface() {
    const {arrowInterface, navigationHintVisible} = this.state

    if (arrowInterface) {
      return (
        <Fragment>
          <button className='background__arrow background__arrow--left' onClick={() => this.move('Backward')} />
          {navigationHintVisible && (
            <div className='background__scroll-info background__scroll-info--mobile'>
              Tap these arrows to move
            </div>
          )}
          <button className='background__arrow background__arrow--right' onClick={() => this.move('Forward')} />
        </Fragment>
      )
    }

    return (
      navigationHintVisible && (
        <div className='background__scroll-info'>
          Scroll to move the car
        </div>
      )
    )
  }

  _removeInfo() {
    if (!this.state.navigationHint) return

    this.setState({navigationHint: false})
    // Remove scroll info
    window.setTimeout(() => {
      this.setState({navigationHintVisible: false})
    }, constants.BACKGROUND_INFO_TIMEOUT)
  }
}

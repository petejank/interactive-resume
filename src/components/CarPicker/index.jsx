import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {connect} from 'react-redux'

import CarPickerContainer from './Container'
import store from 'store'
import * as playerActions from 'store/player/actions'
import * as constants from './constants'

export class CarPicker extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    playerCar: PropTypes.string
  }

  state = {
    rendered: true
  }

  render() {
    const {playerCar, children} = this.props
    const {rendered} = this.state

    const carPickerClass = classNames('car-picker', {
      'car-picker--hide': playerCar
    })

    // Funky rendering optimization
    if (playerCar) {
      window.setTimeout(() => {
        this.setState({
          rendered: false
        })
      }, constants.SLIDE_OUT_TIMEOUT)
    }

    return (
      <section>
        {rendered && (
          <div className={carPickerClass}>
            <div className='car-picker__background'>
              <CarPickerContainer pickCarHandler={this.pickCarHandler} />
            </div>
          </div>
        )}
        {children}
      </section>
    )
  }

  pickCarHandler(carType) {
    store.dispatch({
      type: playerActions.SELECT_PLAYER_CAR,
      value: carType
    })
  }
}

export default connect(({playerState: {playerCar}}) => ({playerCar}))(CarPicker)

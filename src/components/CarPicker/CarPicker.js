'use strict'

import './assets/car-picker.scss'
import React from 'react'
import store from 'store/store'
import {connect} from 'react-redux'
import * as PlayerActions from 'store/Player/PlayerActions'
import classNames from 'classnames'
import CarPickerContainer from './CarPickerContainer'
import * as Constants from './Constants'

const stateToProps = (store) => ({
  playerState: store.playerState
})

export const CarPicker = React.createClass({
  getInitialState() {
    return {
      rendered: true
    }
  },
  pickCarHandler(carType) {
    store.dispatch({
      type: PlayerActions.SELECT_PLAYER_CAR,
      value: carType
    })
  },
  render() {
    const carPickerClass = classNames({
      'car-picker': true,
      'car-picker--hide': this.props.playerState.playerCar
    })

    // Funky rendering optimization
    if (this.props.playerState.playerCar) {
      window.setTimeout(() => {
        this.setState({
          rendered: false
        })
      }, Constants.SLIDE_OUT_TIMEOUT)
    }

    return (
      <section>
        {(this.state.rendered ? <div className={carPickerClass}>
          <div className='car-picker__background'>
            <CarPickerContainer pickCarHandler={this.pickCarHandler} />
          </div>
        </div> : null)}
        {this.props.children}
      </section>
    )
  }
})

export default connect(stateToProps)(CarPicker)

import React, {PropTypes} from 'react'
import classNames from 'classnames'
import {connect} from 'react-redux'

export const Player = ({playerCar}) => {
  const playerClass = classNames('player', `player--${playerCar}`)

  return (
    <div className={playerClass} />
  )
}

Player.propTypes = {
  playerCar: PropTypes.string
}

export default connect(({playerState: {playerCar}}) => ({playerCar}))(Player)

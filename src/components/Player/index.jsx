import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// It's a class because functional components cannot provide refs
export default class Player extends PureComponent {
  static propTypes = {
    playerCar: PropTypes.string
  }

  render() {
    const playerClass = classNames('player', `player--${this.props.playerCar}`)

    return (
      <div className={playerClass} />
    )
  }
}

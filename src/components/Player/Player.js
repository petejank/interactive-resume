'use strict';

import './assets/player.scss';

import React, {PropTypes} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

const stateToProps = (store) => ({
  playerState: store.playerState
});

const Player = React.createClass({
  render() {
    const playerClass = classNames({
      'player': true,
      [`player--${this.props.playerState.playerCar}`]: this.props.playerState.playerCar
    });

    return (
      <div className={playerClass}></div>
    );
  }
});

export default connect(stateToProps)(Player);

'use strict';

import * as actions from './PlayerActions';
import $ from 'jquery';

const DEFAULT_STATE = {
  playerCar: null
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actions.SELECT_PLAYER_CAR: {
      return $.extend({}, state, {
        playerCar: action.value
      });
    }
    default: {
      return state;
    }
  }
};

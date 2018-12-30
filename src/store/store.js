'use strict'

import {createStore, combineReducers} from 'redux'
import PlayerReducer from './Player/PlayerReducer'

export default createStore(combineReducers({playerState: PlayerReducer}))

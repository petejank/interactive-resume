import {createStore, combineReducers} from 'redux'
import playerReducer from './player/reducer'

export default createStore(combineReducers({playerState: playerReducer}))

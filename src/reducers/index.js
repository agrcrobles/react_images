import { combineReducers } from 'redux'
import counter from './counter'
import img from './img'

const rootReducer = combineReducers({
  counter,
  img
})

export default rootReducer

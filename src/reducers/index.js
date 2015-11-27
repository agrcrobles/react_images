import { combineReducers } from 'redux'
import counter from './counter'
import imgs from './imgs'
import imgSelected from './imgSelected'

const rootReducer = combineReducers({
  counter,
  imgs,
  imgSelected
})

export default rootReducer

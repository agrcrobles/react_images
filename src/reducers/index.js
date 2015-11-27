import { combineReducers } from 'redux'
import imgs from './imgs'
import imgSelected from './imgSelected'

const rootReducer = combineReducers({
  imgs,
  imgSelected
})

export default rootReducer

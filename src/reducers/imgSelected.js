import { ASSIGN } from '../actions/img'

export default function selected(state="key1", action) {
  console.log("mutation here!" + action);

  if(action.type===ASSIGN) {
    state = action.newVal;
  }
  return state;
};

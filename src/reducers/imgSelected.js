import actions from '../actions/img'

export default function selected(state="key1", action) {
  //console.log(action);
  if(action.type=="onChange") {
    state = action.newVal;
  }
  return state;
};

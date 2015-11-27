export const ASSIGN = 'ASSIGN'

function doSelect(newVal) {
  return {
    newVal: newVal,
    type: ASSIGN
  }
}

export function select(arg) {
  console.log(arg);
  return (dispatch, getState) => {
    //something to do with the current or new value?
    //like a request here!!
    const { imgSelected } = getState()
    dispatch(doSelect(arg))
  }
}

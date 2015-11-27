export function doSelect(newVal) {
  return {
    newVal: newVal,
    type: "onChange"
  }
}

export function select(arg) {
  console.log(arg);
  return (dispatch, getState) => {
    //something to do with the current or new value?
    const { imgSelected } = getState()
    dispatch(doSelect(arg))
  }
}

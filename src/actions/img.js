export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

export function selected() {
  return (dispatch, getState) => {
    const { imgSelected } = getState()

    console.log(imgSelected);

    //dispatch(selected())
  }
}

export function increment() {
  console.log("increment");
  return {
    type: ""
  }
}

export function select() {
  console.log("increment");
  return (dispatch, getState) => {
    const { imgSelected } = getState()

    console.log(imgSelected);

    //dispatch(selected())
  }
}

import { LOGIN_REQUEST } from "./types"

export const loginUser = (payload) => {
  return function (dispatch) {
    testDelay()

    dispatch({
      type: LOGIN_REQUEST,
      payload: payload,
    })
  }
}
function testDelay() {
  setTimeout(function () {
    console.log("Hello from testDelay...")
  }, 5000)
}

import { LOGIN_REQUEST } from "./../actions/types"

//InitialState

const initialState = {
  isLoggedIn: false,
  user: {
    email: "",
    password: "",
  },
}

//login Reducer
export const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      }
    default:
      return state
  }
}
export default loginReducers

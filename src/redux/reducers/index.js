import loginReducers from "./loginReducers"
import { combineReducers } from "redux"

//Root Reducers
export default combineReducers({
  login: loginReducers,
})

import { LOGIN_REQUEST } from "./types"

export const loginUser = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload: payload,
  }
}

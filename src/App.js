import React from "react"
import LoginForm from "./component/LoginForm"
import { Provider } from "react-redux"
import store from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <LoginForm />
      </div>
    </Provider>
  )
}

export default App

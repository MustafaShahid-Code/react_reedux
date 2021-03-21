import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
class viewData extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { isLoggedIn, user } = this.props.keylogin
    return (
      <div>
        <Link to='/'> Login Page</Link>
        <h1>Email: {user.email}</h1>
        <h1>Password: {user.password}</h1>
        <h1>isLogIn: {isLoggedIn ? "Logged In" : "Logged Out"}</h1>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  keylogin: state.login,
})
export default connect(mapStateToProps, {})(viewData)

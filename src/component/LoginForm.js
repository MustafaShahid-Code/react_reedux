import React, { Component } from "react"
import { connect } from "react-redux"
import { loginUser } from "../redux/actions/LoginActionCreator"
import { Link } from "react-router-dom"
class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const user = this.state
    console.log(user)
    this.props.loginUser(user)
  }

  render() {
    // HTMLFormControlsCollection

    return (
      <div>
        <Link to='/view'> View Data</Link>
        <h1>Login Form</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  Keylogin: state.login,
})

const mapDispatchToProps = {
  loginUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

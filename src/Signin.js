import React, {Component} from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Backendurl from './Backendurl'

const initialState = {
  email: '',
  password: '',
  password_confirmation: ''
};

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "email") {
      this.setState({email: event.target.value});
      console.log('email ', event.target.value)
    } else if (event.target.name === "password") {
      this.setState({password: event.target.value});
      console.log('password ', event.target.value)
    } else if (event.target.name === "confirmPassword") {
      this.setState({password_confirmation: event.target.value});
      console.log('Confirm password ', event.target.value)
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const set = this.props.signin
    const history = this.props.history
    axios({
      method: 'post',
      url: Backendurl + '/sign-in/',
      data: {'credentials': this.state}
    })
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        console.log(response.data)
        set(response.data.user.token, response.data.user.id)
        history.push('/main')
        return response;
    })
  }

  render () {
    return (

      <form onSubmit={this.handleSubmit}>
      <h2>Sign In</h2>
      <label>
          Email:
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange}  />
        </label>
        <label>
            Password:
            <input name="password" type="password" value={this.state.password} onChange={this.handleChange}  />
          </label>
          <label>
              Confirm Password:
              <input name="confirmPassword" type="password" value={this.state.password_confirmation} onChange={this.handleChange}  />
            </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default withRouter(Signin)

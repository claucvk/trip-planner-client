import React, {Component} from 'react';
import './App.css';

const initialState = {
  email: '',
  password: '',
  password_confirmation: ''
};
class Initialscreen extends Component {
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
    alert('Sign-up successful')
    event.preventDefault();
    fetch('http://localhost:4741/sign-up/', {
      method: 'POST',
      headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  body: JSON.stringify(
    {credentials: this.state}
  )
})
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(signUp) {
        console.log(signUp);
        this.state = initialState;
    });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
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

export default Initialscreen

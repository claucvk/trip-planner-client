import React, {Component} from 'react';
import axios from 'axios';

const initialState = {
  old: '',
  new: ''
};

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    if (event.target.name === "old") {
      this.setState({old: event.target.value});
      console.log('old password ', event.target.value)
    } else if (event.target.name === "new") {
      this.setState({new: event.target.value});
      console.log('new password ', event.target.value)
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'patch',
      url: 'http://localhost:4741/change-password/:id',
      data: {'passwords': this.state}
    })
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        console.log(response.data)
        return response;
    })
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      <h2>Change password</h2>
      <label>
          Old password:
          <input name="old" type="password" value={this.state.old} onChange={this.handleChange}  />
        </label>
        <label>
            New Password:
            <input name="new" type="password" value={this.state.new} onChange={this.handleChange}  />
          </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Profile

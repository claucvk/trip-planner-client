import React, {Component} from 'react';
import axios from 'axios';

// const initialState = {
//
// };

class Deletetrip extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = initialState;
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.signoutHandleSubmit = this.signoutHandleSubmit.bind(this);
  // }
  // handleChange(event) {
  //
  // }
  // Change password
  handleSubmit(event) {
    const user = this.props.getUser()
    event.preventDefault();
    axios({
      method: 'delete',
      //this.user.id
      url: 'http://localhost:4741/change-password/' + user.id,
      headers: {
        'Authorization': 'Token ' + user.token
      },
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
      <h2>Delete One Trip</h2>
        <label>
            Trip Name or Id:
            <input name="" type="text" onChange={this.handleChange}  />
          </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Deletetrip

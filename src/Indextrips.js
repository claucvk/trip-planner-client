import React, {Component} from 'react';
import axios from 'axios'

class Indextrips extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const apiBaseUrl = 'http://localhost:4741'
    console.log(this.state)
    axios({
      // trip id
      url: apiBaseUrl + '/trips',
      method: 'GET',
      headers: {
        'Authorization': 'Token ' + this.props.getUser().token
      },
      data: {
        'trip': this.state
      }
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
        <h2>Get all trips</h2>
        <input type="button" value="Get all trips" />
      </form>
    )
  }
}




export default Indextrips

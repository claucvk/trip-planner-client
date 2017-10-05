import React, {Component} from 'react';
import axios from 'axios';

const initialState = {}

class Showtrip extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
      this.setState({id: event.target.value});
      console.log('id ', event.target.value)
    }
  handleSubmit(event) {
    event.preventDefault();
    const get = this.props.getUser()
    const setState = this.setState.bind(this)

    axios({
        url: 'http://localhost:4741/trips/' + this.state.id,
        method: 'GET',
        headers: {
          'Authorization': 'Token ' + get.token
        }
      })
      .then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          console.log(response.data)
          setState(response.data);
      })
    }
  render () {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <h2>Get one trip</h2>
        <input name="id" type="text" value={this.state.id || ''} onChange={this.handleChange}  />
        <input type="submit" value="Get one trip" />
      </form>
        {this.state.trip && <div>
          <p>Place: {this.state.trip.place_name}</p>
          <p>Departing date: {this.state.trip.departing_date}</p>
          <p>Returning date: {this.state.trip.returning_date}</p>
          <p>Travel duration: {this.state.trip.travel_duration}</p>
          <p>Transportation: {this.state.trip.transportation}</p>
          <p>Accomodation: {this.state.trip.accomodation}</p>
          <p>Eat: {this.state.trip.eat}</p>
          <p>Activities: {this.state.trip.activities}</p>
        </div>}
      </div>
    )
  }
}

export default Showtrip

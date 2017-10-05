import React, {Component} from 'react';
import axios from 'axios'

const initialState = {trips:[]}
class Indextrips extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   const apiBaseUrl = 'http://localhost:4741'
  //   console.log(this.state)
  //   axios({
  //     // trip id
  //     url: apiBaseUrl + '/trips',
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Token ' + this.props.getUser().token
  //     },
  //     data: {
  //       'trip': this.state
  //     }
  //   })
  //   .then(function(response) {
  //       if (response.status >= 400) {
  //           throw new Error("Bad response from server");
  //       }
  //       console.log(response.data)
  //       return response;
  //   })
  // }
  handleSubmit(event) {
    event.preventDefault();
    const get = this.props.getUser()
    const setState = this.setState.bind(this)

    axios({
        url: 'http://localhost:4741/trips',
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
        <h2>Get all trips</h2>
        <input type="submit" value="Get all trips" />
      </form>
      {this.state.trips.map(function(trip, index){
        return (
          <div key={index}>
          <p>Place: {trip.place_name}</p>
          <p>Departing date: {trip.departing_date}</p>
          <p>Returning date: {trip.returning_date}</p>
          <p>Travel duration: {trip.travel_duration}</p>
          <p>Transportation: {trip.transportation}</p>
          <p>Accomodation: {trip.accomodation}</p>
          <p>Eat: {trip.eat}</p>
          <p>Activities: {trip.activities}</p>
        </div>)
      })}
      </div>
    )
  }
}




export default Indextrips

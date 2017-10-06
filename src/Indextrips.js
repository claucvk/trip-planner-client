import React, {Component} from 'react';
import axios from 'axios'
import Backendurl from './Backendurl'

const initialState = {trips:[]}
class Indextrips extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const get = this.props.getUser()
    const setState = this.setState.bind(this)

    axios({
        url: Backendurl + '/trips',
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
    handleDelete(id) {
      const user = this.props.getUser()
      axios({
          url: Backendurl + '/trips/' + id,
          method: 'DELETE',
          headers: {
            'Authorization': 'Token token=' + user.token
          }
        })
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response)
            return response;
        })
    }
  render () {
    const onDelete = this.handleDelete
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <h2>Get all trips</h2>
        <input type="submit" value="Get all trips" />
      </form>
      {this.state.trips.map(function(trip, index){
        return (
          <div key={index}>
          <p>Trip Id: {trip.id}</p>
          <p>Place: {trip.place_name}</p>
          <p>Departing date: {trip.departing_date}</p>
          <p>Returning date: {trip.returning_date}</p>
          <p>Travel duration: {trip.travel_duration}</p>
          <p>Transportation: {trip.transportation}</p>
          <p>Accomodation: {trip.accomodation}</p>
          <p>Eat: {trip.eat}</p>
          <p>Activities: {trip.activities}</p>
          <input type="button" onClick={() => onDelete(trip.id)} value="Delete" />
        </div>)
      })}
      </div>
    )
  }
}




export default Indextrips

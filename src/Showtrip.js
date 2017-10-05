import React, {Component} from 'react';
import axios from 'axios';

const initialState = {}

class Showtrip extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.getTrip = this.getTrip.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    if (event.target.name === "id") {
      this.setState({id: event.target.value});
    } else {
      this.setState({trip:Object.assign({}, this.state.trip, {[event.target.name]: event.target.value})});
      console.log(event.target.name, event.target.value)
    }
    // } else if (event.target.name === "place_name") {
    //     this.setState({trip:{place_name: event.target.value}});
    //     console.log('place name ', event.target.value)
    //   } else if (event.target.name === 'departing_date') {
    //     this.setState({trip:{departing_date: event.target.value}});
    //     console.log('Departing date ', event.target.value)
    //   } else if (event.target.name === 'returning_date') {
    //     this.setState({trip:{returning_date: event.target.value}});
    //     console.log('Returning date ', event.target.value)
    //   } else if (event.target.name === 'travel_duration') {
    //     this.setState({trip:{travel_duration: event.target.value}});
    //     console.log('Travel duration ', event.target.value)
    //   } else if (event.target.name === 'accomodation') {
    //     this.setState({trip:{accomodation: event.target.value}});
    //     console.log('Accomodation ', event.target.value)
    //   }else if (event.target.name === 'transportation') {
    //     this.setState({trip:{transportation: event.target.value}});
    //     console.log('transportation ', event.target.value)
    //   } else if (event.target.name === 'eat') {
    //     this.setState({trip:{eat: event.target.value}});
    //     console.log('eat ', event.target.value)
    //   } else if (event.target.name === 'activities') {
    //     this.setState({trip:{activities: event.target.value}});
    //     console.log('activities ', event.target.value)
    //   }
    }
    getTrip(event) {
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
      handleSubmit(event) {
        event.preventDefault();
        const get = this.props.getUser()
        const setState = this.setState.bind(this)

        axios({
            url: 'http://localhost:4741/trips/' + this.state.id,
            method: 'PATCH',
            headers: {
              'Authorization': 'Token ' + get.token
            },
            data: {trip:this.state.trip}
          })
          .then(function(response) {
              if (response.status >= 400) {
                  throw new Error("Bad response from server");
              }
              console.log(response.data)
          })
        }
  render () {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
          <h2>Get one trip and edit it</h2>
          <input name="id" type="text" value={this.state.id || ''} onChange={this.handleChange}  />
          <input type="button" value="Get one trip" onClick={this.getTrip}/>

          {this.state.trip && <div>
            <label>
                Place:
                <input name="place_name" type="text" value={this.state.trip.place_name || ''} onChange={this.handleChange}  />
              </label>
              <label>
                Departing date:
                <input name="departing_date" type="date" value={this.state.trip.departing_date || ''} onChange={this.handleChange}  />
              </label>
              <label>
                Returning date:
                <input name="returning_date" type="date" value={this.state.trip.returning_date || ''} onChange={this.handleChange}  />
              </label>
              <label>
                  Travel_duration:
                  <input name="travel_duration" type="text" value={this.state.trip.travel_duration || ''} onChange={this.handleChange}  />
              </label>
              <label>
                  Transportation:
                  <input name="transportation" type="text" value={this.state.trip.transportation || ''} onChange={this.handleChange}  />
              </label>
              <label>
                  Accomodation:
                  <input name="accomodation" type="text" value={this.state.trip.accomodation || ''} onChange={this.handleChange}  />
              </label>
              <label>
                  Eat:
                  <input name="eat" type="text" value={this.state.trip.eat || ''} onChange={this.handleChange}  />
              </label>
              <label>
                  Activities:
                  <input name="activities" type="text" value={this.state.trip.activities || ''} onChange={this.handleChange}  />
              </label>
            <input type="submit" value="Submit" />
          </div>}
        </form>
      </div>
    )
  }
}

export default Showtrip

import React, {Component} from 'react';
import axios from 'axios';

const initialState = {
  place_name: '',
  departing_date: '',
  returning_date: '',
  travel_duration: '',
  transportation: '',
  accomodation: '',
  eat: '',
  activities: ''
};

class Updatetrip extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    if (event.target.name === "place_name") {
      this.setState({place_name: event.target.value});
      console.log('place name ', event.target.value)
    } else if (event.target.name === 'departing_date') {
      this.setState({departing_date: event.target.value});
      console.log('Departing date ', event.target.value)
    } else if (event.target.name === 'returning_date') {
      this.setState({returning_date: event.target.value});
      console.log('Returning date ', event.target.value)
    } else if (event.target.name === 'travel_duration') {
      this.setState({travel_duration: event.target.value});
      console.log('Travel duration ', event.target.value)
    } else if (event.target.name === 'transportation') {
      this.setState({transportation: event.target.value});
      console.log('transportation ', event.target.value)
    } else if (event.target.name === 'eat') {
      this.setState({eat: event.target.value});
      console.log('eat ', event.target.value)
    } else if (event.target.name === 'activities') {
      this.setState({activities: event.target.value});
      console.log('activities ', event.target.value)
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'patch',
      url: 'http://localhost:4741/trips/:id/',
      data: {'trip': this.state}
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
      <h2>Update a trip</h2>
      <label>
          Place:
          <input name="place_name" type="text" value={this.state.place_name} onChange={this.handleChange}  />
        </label>
        <label>
            Departing date:
            <input name="departing_date" type="date" value={this.state.departing_date} onChange={this.handleChange}  />
          </label>
          <label>
              Returning date:
              <input name="returning_date" type="date" value={this.state.returning_date} onChange={this.handleChange}  />
            </label>
            <label>
                Travel_duration:
                <input name="travel_duration" type="text" value={this.state.travel_duration} onChange={this.handleChange}  />
              </label>
              <label>
                  Transportation:
                  <input name="transportation" type="text" value={this.state.transportation} onChange={this.handleChange}  />
                </label>
                <label>
                    Accomodation:
                    <input name="accomodation" type="text" value={this.state.accomodation} onChange={this.handleChange}  />
                  </label>
                  <label>
                      Eat:
                      <input name="eat" type="text" value={this.state.eat} onChange={this.handleChange}  />
                    </label>
                    <label>
                        Activities:
                        <input name="activities" type="text" value={this.state.activities} onChange={this.handleChange}  />
                      </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Updatetrip

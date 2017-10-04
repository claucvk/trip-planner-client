
import React, {Component} from 'react';
import Header from './Header.js'
import Initialscreen from './Initialscreen.js'
import 'isomorphic-fetch'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Trip extends Component {
  render () {

    return (
      <div>
        <Header/>
        <Router>
        <Route path="/sign-up" component={Initialscreen}/>
        </Router>
      </div>
    )
  }
}

export default Trip

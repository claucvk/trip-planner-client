
import React, {Component} from 'react';
import Header from './Header.js'
import Initialscreen from './Initialscreen.js'
import 'isomorphic-fetch'

class Trip extends Component {
  render () {

    return (
      <div>
        <Header/>
        <Initialscreen />
      </div>
    )
  }
}

export default Trip

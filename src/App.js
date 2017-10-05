
import React, {Component} from 'react';
import Header from './Header.js'
import './App.css'
import Initialscreen from './Initialscreen.js'
import 'isomorphic-fetch'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
// } from 'react-router-dom'

class Trip extends Component {
  render () {

    return (
      <div>
        <Header/>
        <Initialscreen/>
      </div>
    )
  }
}

export default Trip

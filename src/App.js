
import React, {Component} from 'react';
import Header from './Header.js'
import './App.css'
import Initialscreen from './Initialscreen.js'
import Mainscreen from './Mainscreen.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Store the token
const loginUser = {}

const signout = function () {
   loginUser.token=null
}
const signin = function (token,id) {
  loginUser.token=token
  loginUser.id=id
}
const getUser = function () {
  return loginUser
}

class Trip extends Component {
  render () {

    return (
      <Router>
      <div>
        <Header />
        <Route path={'/'} exact render={()=> <Initialscreen signin={signin}/>} />

        <Route path={'/main'} render={()=> <Mainscreen getUser={getUser} signout={signout}/>} />

        </div>
      </Router>
    )
  }
}

export default Trip

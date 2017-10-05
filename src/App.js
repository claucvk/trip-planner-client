
import React, {Component} from 'react';
import Header from './Header.js'
import './App.css'
import Initialscreen from './Initialscreen.js'
import Mainscreen from './Mainscreen.js'

// Store the token
const loginUser = {}

const signout = function () {
   loginUser.token=null
}
const setToken = function (token) {
  loginUser.token=token
}
const getToken = function () {
  return loginUser.token
}

class Trip extends Component {
  render () {

    return (
      <div>
        <Header />
        <Initialscreen setToken={setToken}/>
        <Mainscreen getToken={getToken} signout={signout}/>
      </div>
    )
  }
}

export default Trip

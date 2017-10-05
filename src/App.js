
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
      <div>
        <Header />
        <Initialscreen signin={signin}/>
        <Mainscreen getUser={getUser} signout={signout}/>
      </div>
    )
  }
}

export default Trip

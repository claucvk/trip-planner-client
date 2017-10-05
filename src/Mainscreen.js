import React, {Component} from 'react';
import Profile from './Profile.js'
import Createtrip from './Createtrip.js'

class Mainscreen extends Component {
  render () {
    return (
      <div>
        <Profile />
        <Createtrip />
      </div>
    )
  }
}

export default Mainscreen

import React, {Component} from 'react';
import Profile from './Profile.js'
import Createtrip from './Createtrip.js'
import Updatetrip from './Updatetrip.js'

class Mainscreen extends Component {
  render () {
    return (
      <div>
        <Profile />
        <Createtrip />
        <Updatetrip />
      </div>
    )
  }
}

export default Mainscreen

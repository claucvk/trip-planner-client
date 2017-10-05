import React, {Component} from 'react';
import Profile from './Profile.js'
import Createtrip from './Createtrip.js'
import Updatetrip from './Updatetrip.js'

class Mainscreen extends Component {
  render () {
    return (
      <div>
        <Profile getToken={this.props.getToken} signout={this.props.signout}/>
        <Createtrip getToken={this.props.getToken}/>
        <Updatetrip getToken={this.props.getToken}/>
      </div>
    )
  }
}

export default Mainscreen

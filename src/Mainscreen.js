import React, {Component} from 'react';
import Profile from './Profile.js'
import Createtrip from './Createtrip.js'
import Updatetrip from './Updatetrip.js'
import Indextrips from './Indextrips.js'
import Showtrip from './Showtrip.js'

class Mainscreen extends Component {
  render () {
    return (
      <div>
        <Profile getUser={this.props.getUser} signout={this.props.signout}/>
        <Createtrip getUser={this.props.getUser}/>
        <Updatetrip getUser={this.props.getUser}/>
        <Indextrips getUser={this.props.getUser}/>
        <Showtrip getUser={this.props.getUser}/>
      </div>
    )
  }
}

export default Mainscreen

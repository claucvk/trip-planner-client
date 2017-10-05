import React, {Component} from 'react';
import Profile from './Profile.js'
import Createtrip from './Createtrip.js'
import Updatetrip from './Updatetrip.js'
import Indextrips from './Indextrips.js'
import Showtrip from './Showtrip.js'
import Deletetrip from './Deletetrip.js'


class Mainscreen extends Component {
  render () {
    return (
      <div>
        <Profile getUser={this.props.getUser} signout={this.props.signout}/>
        <Createtrip getUser={this.props.getUser}/>
        <Updatetrip getUser={this.props.getUser}/>
        <Indextrips />
        <Showtrip />
        <Deletetrip />
      </div>
    )
  }
}

export default Mainscreen

import React, {Component} from 'react';
import Signup from './Signup.js'
import Signin from './Signin.js'

class Initialscreen extends Component {
  render () {
    return (
      <div>
        <Signup />
        <Signin signin={this.props.signin}/>
      </div>
    )
  }
}

export default Initialscreen

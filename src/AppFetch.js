import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Facts from './components/facts';


class AppFetch extends Component {
  constructor(){
    super()
    this.state = {
      facts: []
    }
  }

  //lifecycle method used when calling api
  componentDidMount() {
    console.log('hello')
  }

  render(){
    return (
      <div>
        <Facts facts={this.state.facts}/>
      </div>
    )
  }
}

// Initial state is an empty array, info will be passed to Facts component as facts prop

export default AppFetch;
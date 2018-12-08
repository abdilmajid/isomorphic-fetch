import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Facts from './components/facts';


class AppFetch extends Component {
  constructor(){
    super()
    this.state = {
      facts: [],
      newFact: ''
    }
  }

  //lifecycle method used when calling api
  componentDidMount() {
    fetch('http://student-example-api.herokuapp.com/v1/facts', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          facts: json.facts
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      newFact: e.target.value
    })
  }

  handleClick = (e) => {
    fetch('http://student-example-api.herokuapp.com/v1/facts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        fact: {
          text: this.state.newFact
        }
      })
    }).then(res => res.json())
      .then(json => {
        this.setState({
          newFact: '',
          facts: [
            ...this.state.facts,
            json.fact
          ]
        })

      })
  }

  render(){
    const {facts, facts: { id }} = this.state
    return (
      <div>
        <Facts 
            key={id} 
            facts={facts}
            value={this.state.newFact}  
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
      </div>
    )
  }
}

// Initial state is an empty array, info will be passed to Facts component as facts prop
// fetch => takes 2 arguments. 
// 1st -> api url
// 2nd -> javascript object
// once fetch is called we get back a promise, the promise will have a response, we use this response to a res.json(). then we create another promise to return a json object which we can use in our component.
// then we use this to set our state (from the empty array to the json)
// javascript closure -> key word this refers to closest closure it's in, arrow functions helps by binding (this) to the component and not the function.

// handleClick() -> we use fetch for a POST request instead of a GET(which we did in componentDidMount()). in post we need to add a body

export default AppFetch;
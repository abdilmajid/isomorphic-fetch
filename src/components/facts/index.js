import React from 'react'

const Facts = (props) => {
  return (
      <ul>
        {props.facts.map(facts => {
          return (
            <li>{facts.text}</li>
          )
        })}
      </ul>
  )
}


// facts prop is passed into component then we use the array method map to display array items {props.facts.map(item => item.a...)}.


export default Facts;
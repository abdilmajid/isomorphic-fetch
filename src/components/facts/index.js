import React from 'react'

const Facts = (props) => {
  return (
    <div>
      <input
        className='input'
        type='text'
        onChange={props.handleChange}
        value={props.value}
      />
      <button
          onClick={props.handleClick}
      >
        Submit new Fact
      </button>
      <ul>
        {props.facts.map((facts, id) => {
          return (
            <li key={id}>{facts.text}</li>
          )
        })}
      </ul>
    </div>
  )
}


// facts prop is passed into component then we use the array method map to display array items {props.facts.map(item => item.a...)}.

// value makes it a controlled component

export default Facts;
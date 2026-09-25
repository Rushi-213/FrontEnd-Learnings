import React from 'react'

export default function Student(props) {
  return (
    <div>Student
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <p>City: {props.city}</p>
    </div>
  )
}

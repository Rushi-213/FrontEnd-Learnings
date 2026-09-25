import React from 'react'

export default function Student1({name, age, city}) {
  return (
    <div>Student1
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <p>City: {city}</p>
    </div>
  )
}

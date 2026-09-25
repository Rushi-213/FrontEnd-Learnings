import React from 'react'

export default function Student2(props) {
    const {name, age, city, hobbies} = props;
  return (
    <div>Student2
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <p>City: {city}</p>

        <ul>
           {hobbies.map((hobby, index)=>(
            <li key={index}>{hobby}</li>
           ))}
        </ul>
    </div>
  )
}

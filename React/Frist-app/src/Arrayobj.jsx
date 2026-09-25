import React from 'react'

export default function Arrayobj() {
    const fruit = ['apple', 'banana', 'orange']
    return (
        <div>
            <h2>Fruits</h2>
            <ul>
                {fruit.map((f, index) => (
                    <li key={index}> {f} </li>
                ))}
            </ul>
        </div>
    )
}

import React from 'react'

export default function Objectobj() {
    const person = {
        name: 'John',
        age: 30,
        city: 'New York'
    }
    const users = [{ name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 40, city: 'Chicago' }]
    
    function getUserInfo(user) {
        return user.name + ' ' + user.age + ' ' + user.city
    }

    function fullname(person) {
        return person.name + ' ' + person.age + ' ' + person.city
    }

    return (
        <div>
            <h2>Person</h2>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>City: {person.city}</p>
            <p>Full Name: {fullname(person)}</p>
            <h2>Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}> {getUserInfo(user)} </li>
                ))}
            </ul>     
        </div>
    )
}

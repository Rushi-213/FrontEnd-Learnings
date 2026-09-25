import React from 'react'

export default function Button({ lable, handleClick }) {
    return (
        <div>
        <button onClick={handleClick}>{lable}</button>
        </div> 
    )
       
    
}

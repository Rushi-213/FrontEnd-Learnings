import React from 'react'
import './App.css'
export default function ConditionalRendering() {
    const isLoggedIn = true;
  /*  if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }else {
        return <h1>Please sign up.</h1>;
    }   */

    let msg;
    if (isLoggedIn) {
        msg = <h1 className='visible'>Welcome back!</h1>;
    } else {
        msg = <h1 className='hidden'>Please sign up.</h1>;
    }
   // return msg;

   
  return (
    <div>{msg}
    
    {msg && <p>Welcome to the application!</p>}

    <h1 className={isLoggedIn ? 'visible' : 'hidden'}>
      {isLoggedIn ? 'Welcome back!' : 'Please sign up.'}
    </h1>
    
    </div>
  )
 
}

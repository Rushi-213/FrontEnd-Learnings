import { useState } from 'react'
import Arrayobj from './Arrayobj.jsx'
import ConditionalRendering from './ConditionalRendering.jsx'
import Objectobj from './Objectobj.jsx'
import Button from './Props/Button.jsx'
import Student from './Props/Student.jsx'
import Student1 from './Props/Student1.jsx'
import Student2 from './Props/Student2.jsx'

function App() {
  const [count, setCount] = useState(0)

  const hobbies = ['Reading', 'Traveling', 'Cooking', 'Swimming'];

  function msg() {
    alert('Hello, this is a message from the App component!');
  }

  function byemsg() {
    alert('Goodbye, this is a message from the App component!');
  }

  return (
    <>
     {/* <Arrayobj />
      <Objectobj />
      <ConditionalRendering />
      
      <Student />
      <Student name="Jhon" age={23} city="Mumbai" />
      <Student name="Jane" age={25} city="Delhi" />
      <Student name="Bob" age={30} city="Bangalore" />
      <Student name="Alice" age={28} city="Chennai" />

      <Student1 name="Jhon" age={23} city="Mumbai" />
      <Student1 name="Jane" age={25} city="Delhi" />
      
      <Student2 name="Bob" age={30} city="Bangalore" />
      <Student2 name="Alice" age={28} city="Chennai" />
      <Student2 name="David" age={35} city="Kolkata" hobbies={hobbies} />

      <Button lable="Click Me" handleClick={msg} />
      <Button lable="Say Goodbye" handleClick={byemsg} />  */} 

    </>
  )
}

export default App

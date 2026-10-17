import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Advanceform from './Advanceform'
import ExamForm from './ExamForm'
import FromicLibrary from './FormValidation/FromicLibrary'
import Yuplibrary from './FormValidation/Yuplibrary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Yuplibrary/>
    </>
  )
}

export default App

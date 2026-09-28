import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Arrayobj from './Arrayobj.jsx'
import Objectobj from './Objectobj.jsx'
import ConditionalRendering from './ConditionalRendering.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    {/*<Home />
    <Arrayobj />
    <Objectobj />
    <ConditionalRendering /> */} 
  </StrictMode>,
  
)

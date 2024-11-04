import { useState } from 'react'
import {FaStar} from "react-icons"
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1> 
    </>
  )
}

export default App

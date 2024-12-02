import { useState } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import Home from "../src/Pages/Home"
import About from '../src/Pages/About'
function App() {
  return (
    <>  
    <BrowserRouter>
     <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route/>
       <Route/>
       <Route/>
     </Routes>
    </BrowserRouter> 
  
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import About from '../screens/About'

function MyRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>    
        <Route path='/about' element={<About/>} />  
    </Routes>
  )
}

export default MyRouter
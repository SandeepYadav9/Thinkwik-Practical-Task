import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Auth/Login'
import Signup from '../components/Auth/Signup'
import Home from '../Pages/Home'

const AppNavigator = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default AppNavigator
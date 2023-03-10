import { useState } from 'react'

import './App.scss'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Layout from './Layout/Layout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/me' element={<Layout />}>
        <Route path='profile' element={<Profile />} />

      </Route>


    </Routes>


  )
}



export default App

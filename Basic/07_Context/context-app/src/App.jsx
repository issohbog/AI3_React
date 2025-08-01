import './App.css'
import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginContextProvider from './contexts/LoginContextProvider'
import Login from './pages/Login'
import Join from './pages/Join'
import User from './pages/User'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/join' element={<Join />}></Route>
          <Route path='/user' element={<User />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  )
}

export default App
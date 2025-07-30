import React, { useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation, useParams} from 'react-router-dom'

const App = () => {
  // 🧊 state 
  const [isLogin, setIsLogin] = useState(true)


  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route 
            path='/boards/:id' element={<Board />} />
          <Route path='/login' element={ <Login />} />
          <Route 
              path='/admin' 
              element={ isLogin ? <Admin /> : <Navigate to="/login"/> }>
          </Route>
          

        </Routes>
    </BrowserRouter>
  )
}

// 🔗 / 
const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">About</Link><br/>
      <Link to="/boards/100?category=공지사항&option=10">About</Link><br/>
      <Link to="/admin">admin</Link><br/>
      <Link to="/login">Login</Link><br/>

    </>
  )
}


// 🔗 /about
const About = () => {
  return (
    <>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </>
  )
}


// 🔗 /boards/:id
const Board = () => {

  // useParams 
  // : react-router v6 이상부터 사용 
  // URL 경로의 정의된 파라미터를 가져오는 Hook
  const { id } = useParams()

  // ?파라미터=값 가져오는 방법 
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const category = query.get("category")
  const option = query.get("option")
  return (
    <>
      <h1>게시판</h1>
      <h3>게시글 id : {id} </h3>
      <h3>파라미터 category : {category} </h3>
      <h3>파라미터 option : {option} </h3>    
      <Link to='/'>Home</Link>
    </>
  )
}

// 🔗 /login 
const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <Link to="/">Home</Link>
    </>
  )
}
// 🔗 /admin
const Admin = () => {
  return (
    <>
      <h1>Admin</h1>
      <Link to="/">Home</Link>
    </>
  )
}


export default App
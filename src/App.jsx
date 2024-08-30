import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import FilteredProducts from './components/filteredProducts/FilteredProducts'
import SingleProduct from './components/filteredProducts/SingleProduct'
import { useSelector } from 'react-redux'
import Login from './components/login/Login'

function App() {

  const user = useSelector((state) => state.user.user)
  const {authUser} = user
  
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="filteredProducts/:type"element={<FilteredProducts />}></Route>
          <Route path="filteredProducts/:type/:id"element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

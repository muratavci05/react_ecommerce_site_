import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/header/header'
import useApi from './Hooks/useApi'
import Footer from './Components/footer/footer'
import CategoryDetail from './Pages/category/CategoryDetail'
import Home from './Pages/home/home'
import React from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { connect } from 'react-redux'
import ProductDetail from './Pages/category/ProductDetail'
import Cart from './Pages/Cart/cart'

function App(props) {
  console.log('APP PROPS>>>', props)
  const api = useApi();

  api
    .get('shop/countries')
    .then((response) => {
      console.log('RESPONSEDATA::>', response)
    })
    .catch((err) => {
      console.log('ERRDATA::', err)
    })
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category">
            <Route path=":categoryCode" element={<CategoryDetail />} />
          </Route>
          <Route path="/product">
            <Route path=":productCode" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ,
      <Footer />
    </React.Fragment>
  )
}

const maptoProps = (state) => {
  return { ...state }
}

export default connect(maptoProps)(App)
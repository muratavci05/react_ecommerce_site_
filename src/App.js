import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import useApi from './hooks/useApi'
import Footer from './components/footer/Footer'
import CategoryDetail from './pages/category/CategoryDetail'
import Home from './pages/home/Home'
import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { connect } from 'react-redux'
import ProductDetail from './pages/category/ProductDetail'
import Cart from './pages/Cart/cart.js'
function App(props) {
  console.log('APPPROPS::', props)
  const api = useApi()

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
          <Route path="/category">
            <Route path=":categoryCode" element={<CategoryDetail />} />
          </Route>
          <Route path="/product">
            <Route path=":productCode" element={<ProductDetail />} />
          </Route>
          <Route path="/cart" element={<Cart/>}/>
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

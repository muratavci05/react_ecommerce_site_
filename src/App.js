import "./App.css";
import React from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route,
} from "react-router-dom";
import Header from "./Pages/Header/index";
import Home from "./Pages/Home/home";
import FooterPage from "./Pages/Footer";
import CategoryDetail from "./Pages/Home/CategoryDetail";
import ProductDetail from "./Pages/Home/ProductDetail";
import useApi from "./Hooks/useApi";
import Login from "./Pages/Header/Login";
import Register from "./Pages/Header/Register";
import {connect} from "react-redux";





function App(props) {
console.log("app.js PROPS >>>",props);
  const api = useApi();

  api .get("shop/countries")
    .then((res) =>{
        console.log("appJS responsive Data", res);
    })
    .catch((err)=>{
      console.log("appJS ERROR >>>", err);
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
            <Route path=":productCode" element={<ProductDetail />} />
      </Routes>
     </BrowserRouter>
    <FooterPage />
    </React.Fragment>
  )
}

const maptoProps = (state) => {
  return { ...state }
}

export default connect(maptoProps)(App)
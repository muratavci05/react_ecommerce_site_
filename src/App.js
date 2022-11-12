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




function App() {
  return (
    <React.Fragment className="container">
  
       <Header/>
       <BrowserRouter>
          <Routes>
              <Route index element={ <Home/>}/>
              <Route path=":categoryDetail" element={<CategoryDetail/>}/>
             
          </Routes>
       </BrowserRouter>
      
     <FooterPage/>
     
    </React.Fragment>
  );
}

export default App;

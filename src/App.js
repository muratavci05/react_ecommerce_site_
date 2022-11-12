import "./App.css";
import React from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route,
} from "react-router-dom";
import Header from "./Pages/Header/index";
import Home from "./Pages/Home/home";




function App() {
  return (
    <React.Fragment className="container">
  
       <Header/>
       <BrowserRouter>
          <Routes>
              <Route index element={ <Home/>}/>
          </Routes>
       </BrowserRouter>
      
     
     
    </React.Fragment>
  );
}

export default App;

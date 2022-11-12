import { 
  BrowserRouter, 
  Router, 
  Route 
} from "react-router-dom";
import Header from "./Components/Header";
import SliderMain from "./Main/components/slider";



function App() {
  return (
    <div className="App">
      <Header/>
      <SliderMain/>
      
    </div>
  );
}

export default App;

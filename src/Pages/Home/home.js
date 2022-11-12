import React from "react";
import Product from "../../Components/Main/product.js";
import Slider from "../../Components/Main/slider.js" 
const Home = (props) => {

    return(
        <div className="container">
            <div>
                <div>
                <Slider/>
                </div>
                <div>
                <Product/>
                </div>
           
            
            </div>
           
        </div>

    )
}

export default Home;
import React from "react";

const Header = ()=>{

    return(
     <div className="Container">

        
        <div className="container">
            <div className="row">
                
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-8">
                    <div className="logo">
                        <a href="index.html"><img src="images/logo.png" alt=""/> </a>
                    </div>
                </div>
                
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="search-bg">
                        <input type="text" className="form-control" placeholder="Search Here"/>
                        <button type="Submit"><i className="fa fa-search"></i></button>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="account-section">
                        <ul>
                            <li><a href="#" className="title hidden-xs">My Account</a></li>
                            <li className="hidden-xs">|</li>
                            <li><a href="#" className="title hidden-xs">Register</a></li>
                            <li><a href="#" className="title"><i className="fa fa-shopping-cart"></i>   <sup className="cart-quantity">1</sup></a>
                            </li>
                        </ul>
                    </div>
                   
                </div>
                
            </div>
        </div>
        
        <div className="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        
                        <div id="navigation" className=""><div id="menu-button">Menu</div>
                            <ul style={{display: "block"}}>
                                <li className="active"><a href="index.html">Home</a></li>
                                <li className="has-sub"><span className="submenu-button"></span><a href="#">Mobiles</a>
                                    <ul style={{display: "block"}}>
                                        <li><a href="product-list.html">Mobile List</a></li>
                                        <li><a href="product-single.html">Mobile Single </a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About</a>
                                </li>
                                <li className="has-sub"><span className="submenu-button"></span><a href="#">Pages</a>
                                    <ul style={{display: "block"}}>
                                        <li><a href="checkout.html">Checkout Form</a></li>
                                        <li><a href="cart.html">Cart</a> </li>
                                        <li><a href="login-form.html">Login</a> </li>
                                        <li><a href="signup-form.html">Signup</a> </li>
                                        <li><a href="404-page.html">404-page</a> </li>
                                        <li><a href="styleguide.html">styleguide</a> </li>
                                    </ul>
                                </li>
                                <li className="has-sub"><span className="submenu-button"></span><a href="#">Blog</a>
                                    <ul style={{display: "block"}}>
                                        <li><a href="blog-default.html">Blog Default</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact-us.html">Contact Us</a>
                                </li>
                                <li><a href="template-feature.html">Template Feature</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            
    </div>
    </div>
            

    </div>
    )
}

export default Header;
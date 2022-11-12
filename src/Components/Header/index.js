import React from "react";

const Header = ()=>{

    return(
        <div className="Container">
            <div className="top-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-7 col-sm-6 hidden-xs">
                    <p className="top-text">Flexible Delivery, Fast Delivery.</p>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                    <ul>
                        <li>+180-123-4567</li>
                        <li>info@demo.com</li>
                        <li><a href="#">Help</a></li>
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
                                    <ul style={{display:"block"}}>
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
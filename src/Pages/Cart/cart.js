import React from "react";
import { connect } from "react-redux";
import CartItem from "./cartItem";

const Cart = (props) =>{

    const cartItemsJsx = [];
    if (props.cartState){
        props.cartState.items.map((item, index)=>{
            cartItemsJsx.push(<CartItem key={index} item={item} />)
        });
    }

    const cartRemoveJsx = [];


    return(
        <React.Fragment>
         <div className="space-medium">
            <div className="container">
                 <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                     <div className="box">
                        <div className="box-head">
                            <h3 className="head-title">My Cart (02)</h3>
                        </div>

                        <div className="box-body">
                            <div className="table-responsive">
                                <div className="cart">
                                    <table className="table table-bordered ">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <span>Item</span></th>
                                                <th>
                                                    <span>Price</span></th>
                                                <th>
                                                    <span>Quantity</span></th>
                                                <th>
                                                    <span>Total</span></th>
                                                <th>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody> 
                                            {cartItemsJsx}  {/* sepete eklenmiş olan ürünlerin detaylı bilgisi */}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn-link"><i className="fa fa-angle-left"></i> back to shopping</a>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="box mb30">
                        <div className="box-head">
                            <h3 className="head-title">Price Details</h3>
                        </div>
                        <div className="box-body">
                            <div className=" table-responsive">
                                <div className="pay-amount ">
                                    <table className="table mb20">
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <span>Price (2 items)</span></th>
                                                <td>$2400</td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <span>Delivery Charges</span></th>
                                                <td><strong className="text-green">Free</strong></td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <span className="mb0" style={{fontWeight:"700px"}}>Amount Payable</span></th>
                                                <td style={{fontWeight:"700px",color:"#1c1e1e"}}> $2400</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <button className="btn btn-primary btn-block">Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>

                    <div className="box mb30">
                        <div className="box-head">
                            <h3 className="head-title">Coupons &amp; Offers</h3>
                        </div>
                        <div className="box-body">
                            <form>
                                <div className="coupon-form">
                                    <input type="text" name="coupon_code" 
                                    className="form-control" id="coupon_code" value="" placeholder="Coupon code"/>
                                    <input type="submit" 
                                    className="btn btn-primary btn-block" name="apply_coupon" value="Apply coupon"/>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
    </React.Fragment>
    )
}

const mapStateToProps = (state)=>{
    return{
        ...state,
    }
 }

export default connect(mapStateToProps)(Cart);
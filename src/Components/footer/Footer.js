import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="footer-widget">
                <h3 className="footer-title">Contact Info </h3>
                <div className="contact-info">
                  <span className="contact-icon">
                    <i className="fa fa-map-marker"></i>
                  </span>
                  <span className="contact-text">
                    1683 Pickens Way Sherman,
                    <br />
                    Bird Street Albuquerque Us 75090
                  </span>
                </div>
                <div className="contact-info">
                  <span className="contact-icon">
                    <i className="fa fa-phone"></i>
                  </span>
                  <span className="contact-text">+180-123-4567 / 89</span>
                </div>
                <div className="contact-info">
                  <span className="contact-icon">
                    <i className="fa fa-envelope"></i>
                  </span>
                  <span className="contact-text">info@demo.com</span>
                </div>
              </div>
            </div>

            <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="footer-widget">
                <h3 className="footer-title">Quick Links</h3>
                <ul className="arrow">
                  <li>
                    <a href="#">Home </a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Mobiles</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="footer-widget">
                <h3 className="footer-title">Policy Info</h3>
                <ul className="arrow">
                  <li>
                    <a href="#">Payments</a>
                  </li>
                  <li>
                    <a href="#">Cancellation &amp; Returns</a>
                  </li>
                  <li>
                    <a href="#">Shipping and Delivery</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">T &amp; C</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="footer-widget">
                <h3 className="footer-title">Connect With Us</h3>
                <div className="ft-social">
                  <span>
                    <a href="#" className="btn-social btn-facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#" className="btn-social btn-twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#" className="btn-social btn-googleplus">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#" className=" btn-social btn-linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#" className=" btn-social btn-pinterest">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#" className=" btn-social btn-instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tiny-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="payment-method alignleft">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-cc-paypal fa-2x"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cc-mastercard  fa-2x"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cc-visa fa-2x"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cc-discover fa-2x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="alignright">
                  Copyright © All Rights Reserved 2020 Template Design by
                  <a
                    href="https://easetemplate.com/"
                    target="_blank"
                    className="copyrightlink"
                  >
                    EaseTemplate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer

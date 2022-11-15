import React, { useEffect } from 'react'

const Slider = () => {
  useEffect(() => {
    window.$('.owl-one').owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 3000,
      Item_Width: 100,
      nav: true,
      navText: [
        '<i className="fa fa-angle-left"></i>',
        '<i className="fa fa-angle-right "></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1400: {
          items: 1,
        },
        1600: {
          items: 1,
        },
        1800: {
          items: 1,
        },
      },
    })
  }, [])
  return (
    <React.Fragment>
      <div className="slider">
        <div className="owl-carousel owl-one owl-theme">
          <div className="item">
            <div className="slider-img">
              <img src="images/slider_1.jpg" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-8 col-sm-6 col-xs-12">
                  <div className="slider-captions">
                    <div className="brand-img">
                      <img src="images/mi_logo.png" alt="" />
                    </div>
                    <h1 className="slider-title">
                      Red Mi <span>Y1</span>
                    </h1>
                    <p className="hidden-xs">
                      LED Selfie-light | Fingerprint sensor | Dedicated microSD
                      card slot Snapdragon 435 octa-core processor{' '}
                    </p>
                    <p className="slider-price">$138.99 </p>
                    <a href="#" className="btn btn-primary btn-lg hidden-xs">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-img">
              <img src="images/slider_2.jpg" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-8 col-sm-6 col-xs-12">
                  <div className="slider-captions">
                    <div className="brand-img">
                      <img src="images/google_logo.png" alt="" />
                    </div>
                    <h1 className="slider-title">Google Pixel 2</h1>
                    <p className="hidden-xs">
                      The latest Qualcomm Snapdragon 835 processor |
                      Water-resistant metal unibody | Up to 7 hours of battery.
                    </p>
                    <p className="slider-price">$ 938.10</p>
                    <a href="#" className="btn btn-primary btn-lg hidden-xs">
                      Download Free Template
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-img">
              <img src="images/slider_3.jpg" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-8 col-sm-6 col-xs-12">
                  <div className="slider-captions">
                    <div className="brand-img">
                      <img src="images/apple_logo.png" alt="" />
                    </div>
                    <h1 className="slider-title">iphone 8 plus </h1>
                    <p className="hidden-xs">
                      5.5 inch Retina HD Display | 12MP wide-angle cameras
                      <br /> | 64 GB &amp; 256 GB ROM Memory
                    </p>
                    <p className="slider-price">$759.64</p>
                    <a href="#" className="btn btn-primary btn-lg hidden-xs">
                      Download Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Slider

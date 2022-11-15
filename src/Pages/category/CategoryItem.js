import React from 'react'

const CategoryItem = (props) => {
  console.log('catITEMPROPS:', props)
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
      <div className="product-block">
        <div className="product-img">
          <img
            src={'https://ecommerce-api.udemig.dev' + props.images[0].path}
            alt=""
          />
        </div>
        <div className="product-content">
          <h5>
            <a href={'/product/' + props.code} className="product-title">
              {props.name} <strong>(128GB, Black)</strong>
            </a>
          </h5>
          <div className="product-meta">
            <a href="#" className="product-price">
              $1100
            </a>
            <a href="#" className="discounted-price">
              $1400
            </a>
            <span className="offer-price">20%off</span>
          </div>
          <div className="shopping-btn">
            <a href="#" className="product-btn btn-like">
              <i className="fa fa-heart"></i>
            </a>
            <a href="#" className="product-btn btn-cart">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryItem

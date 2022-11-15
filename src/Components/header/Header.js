import React, { useState } from 'react'
import headerlogo from './assets/logoheader.png'
import useApi from '../../Hooks/useApi'
import { useEffect } from 'react'
import MenuItem from './components/menu-item'
import { connect } from 'react-redux'

const Header = (props) => {
  console.log("Header >> Item-Count-Props >>>", props);
  const [categories, setCategories] = useState(null)
  const api = useApi()
  console.log('CATEGORİES >>>', categories)
  const catArr = []

  useEffect(() => {
    api
      .get('shop/taxons')
      .then((response) => {
        console.log('shop-TAXON RESPONSIVE >>>', response)
        setCategories(response.data['hydra:member'])
      })

      .catch((err) => {
        console.log('TAXONS ERROR >>', err)
      })
  }, [])

  if (categories === null) {
    return <div>LOADİNG:</div>
  }
  categories.map((item, index) => {
    catArr.push(
      <MenuItem key={index} name={item.name} code={item.code} id={item.id} />,
    )
  })

  return (
    <React.Fragment>
      <div className="container col">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-6 hidden-xs">
              <p className="top-text"></p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
              <ul>
                <li>+180-123-4567</li>
                <li>info@demo.com</li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="sticky-wrapper"
            className="sticky-wrapper"
            style={{ height: '212px' }}
          >
            <div className="header-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-8">
                    <div className="logo">
                      <a href="/">
                        <img src={headerlogo} alt="" />{' '}
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="search-bg">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Here"
                      />
                      <button type="Submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="account-section">
                      <ul>
                        <li>
                          <a href="/login" className="title hidden-xs">
                            LOGIN
                          </a>
                        </li>
                        <li className="hidden-xs">|</li>
                        <li>
                          <a href="/register" className="title hidden-xs">
                            Register
                          </a>
                        </li>
                        <li>
                          <a href="/cart" className="title">
                            <i className="fa fa-shopping-cart"></i>{' '}
                            <sup className="cart-quantity">
                              
                              {
                                props.cartState
                                ? props.cartState.itemsCount : 0 }                      
                              
                            </sup>
                          </a>
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
                      <div id="navigation">
                        <div id="menu-button">Menu</div>
                        <ul>{catArr}</ul>
                      </div>
                    </div>
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

const maptoProps = (state) => {
  return { ...state }
}
export default connect(maptoProps)(Header)

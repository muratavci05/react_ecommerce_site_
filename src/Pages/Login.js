import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useApi from '../Hooks/useApi'
import { SET_TOKEN } from '../redux/reducers/tokenReducer'

const Login = (props) => {
  const navigate = useNavigate()
  const api = useApi()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogClick = () => {
    const logPostData = {
      email,
      password,
    }
    console.log('logPostData', logPostData)
    api
      .post('shop/authentication-token', logPostData)
      .then((response) => {
        console.log('tokenpost', response)
        props.dispatch({
          type: SET_TOKEN,
          payload: { token: response.data.token },
        })
        navigate('/')
      })
      .catch((err) => console.log('logerr', err))
  }

  return (
    <div className="row">
      <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12 ">
        <div className="box-body">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 mb20">
              <h3 className="mb10">Login</h3>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label className="control-label sr-only" for="email"></label>
                  <div className="login-input">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="emaol"
                      type="text"
                      className="form-control"
                      placeholder="Enter your email id"
                      required=""
                    />
                    <div className="login-icon">
                      <i className="fa fa-user"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label className="control-label sr-only"></label>
                  <div className="login-input">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="******"
                      required=""
                    />
                    <div className="login-icon">
                      <i className="fa fa-lock"></i>
                    </div>
                    <div className="eye-icon">
                      <i className="fa fa-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20 ">
                <button
                  onClick={onLogClick}
                  className="btn btn-primary btn-block mb10"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <h4 className="mb20">Login With</h4>
              <div className="social-media">
                <a href="#" className="btn-social-rectangle btn-facebook">
                  <i className="fa fa-facebook"></i>
                  <span className="social-text">Facebook</span>
                </a>
                <a href="#" className="btn-social-rectangle btn-twitter">
                  <i className="fa fa-twitter"></i>
                  <span className="social-text">Twitter</span>{' '}
                </a>
                <a href="#" className="btn-social-rectangle btn-googleplus">
                  <i className="fa fa-google-plus"></i>
                  <span className="social-text">Google Plus</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
        <div className="box-body">
          <div className="feature-left">
            <div className="feature-icon">
              <img src="images/feature_icon_1.png" alt="" />
            </div>
            <div className="feature-content">
              <h4>Loyalty Points</h4>
              <p>
                Aenean lacinia dictum risvitae pulvinar disamer seronorem ipusm
                dolor sit manert.
              </p>
            </div>
          </div>
          <div className="feature-left">
            <div className="feature-icon">
              <img src="images/feature_icon_2.png" alt="" />
            </div>
            <div className="feature-content">
              <h4>Instant Checkout</h4>
              <p>
                Aenean lacinia dictum risvitae pulvinar disamer seronorem ipusm
                dolor sit manert.
              </p>
            </div>
          </div>
          <div className="feature-left">
            <div className="feature-icon">
              <img src="images/feature_icon_3.png" alt="" />
            </div>
            <div className="feature-content">
              <h4>Exculsive Offers</h4>
              <p>
                Aenean lacinia dictum risvitae pulvinar disamer seronorem ipusm
                dolor sit manert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { ...state }
}
export default connect(mapStateToProps)(Login)

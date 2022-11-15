import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useApi from '../Hooks/useApi'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [subscribedToNewsletter, setSubscribedToNewsletter] = useState(false)

  const api = useApi()
  const navigate = useNavigate()

  const onRegisterClick = () => {
    const postData = {
      firstName,
      lastName,
      email,
      password,
      subscribedToNewsletter,
    }
    console.log('POSTDATA>>>', postData)

    api
      .post('shop/customers', postData)
      .then((response) => console.log('POSTRESPONSE>>', response))
      .catch((err) => {
        console.log('POSTERR', err)
      })
      .finally(() => {
        navigate('/login')
      })
  }

  return (
    <div className="content">
      <div className="container">
        <div className="box sing-form">
          <div className="row">
            <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12 ">
              <div className="box-body">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 mb20">
                    <h3 className="mb10">Create Your Account</h3>
                    <p>Please fill all Resgister form Fields Below. </p>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                    }}
                  >
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label
                          className="control-label sr-only"
                          for="name"
                        ></label>
                        <input
                          onChange={(e) => setFirstName(e.target.value)}
                          id="name"
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Name"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <label
                          className="control-label sr-only"
                          for="name"
                        ></label>
                        <input
                          onChange={(e) => setLastName(e.target.value)}
                          id="name"
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Last Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label
                          className="control-label sr-only"
                          for="email"
                        ></label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          name="emaol"
                          type="text"
                          className="form-control"
                          placeholder="Enter your email id"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label
                          className="control-label  sr-only"
                          for="password"
                        ></label>
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="create your password"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <label
                          className="control-label sr-only"
                          for="subscribedToNewsletter"
                        >
                          Subscribe?
                        </label>
                        <input
                          onChange={(e) => {
                            setSubscribedToNewsletter(e.target.checked)
                          }}
                          id="subscribedToNewsletter"
                          name="subscribedToNewsletter"
                          type="checkbox"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                      <button
                        onClick={onRegisterClick}
                        className="btn btn-primary btn-block mb10"
                      >
                        Register
                      </button>
                      <div>
                        <p>
                          Have an Acount? <a href="/login">Login</a>
                        </p>
                      </div>
                    </div>
                  </form>
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
                      Aenean lacinia dictum risvitae pulvinar disamer seronorem
                      ipusm dolor sit manert.
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
                      Aenean lacinia dictum risvitae pulvinar disamer seronorem
                      ipusm dolor sit manert.
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
                      Aenean lacinia dictum risvitae pulvinar disamer seronorem
                      ipusm dolor sit manert.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

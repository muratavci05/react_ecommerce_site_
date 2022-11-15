import React from 'react'

const MenuItem = (props) => {
  console.log('PROPS:::,', props)
  const temp = (
    <ul>
      <li>
        <a href="checkout.html">Checkout Form</a>
      </li>
      <li>
        <a href="cart.html">Cart</a>{' '}
      </li>
      <li>
        <a href="login-form.html">Login</a>{' '}
      </li>
      <li>
        <a href="signup-form.html">Signup</a>{' '}
      </li>
      <li>
        <a href="404-page.html">404-page</a>{' '}
      </li>
      <li>
        <a href="styleguide.html">styleguide</a>{' '}
      </li>
    </ul>
  )
  console.log('temp', temp)
  return (
    <li className="has-sub">
      <span className="submenu-button"></span>
      <a href={`/category/${props.code}`}>{props.name}</a>
      {temp}
    </li>
  )
}

export default MenuItem

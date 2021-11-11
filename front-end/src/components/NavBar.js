import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../AssetsTest/logo3.png'



const NavBar = () => {


  return (
    <nav className="navbar is-black is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title">
            <Link to="/" className="link">
              {/* <figure> */}
              <img src={Logo} alt="Museum Mapper logo" width="200px" />
              {/* </figure> */}
            </Link>
          </span>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/museums" className="link is-size-6 has-text-weight-light">All Museums</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/register" className="link is-size-6 has-text-weight-light">Register</Link>
          </div>
          <div className="navbar-item">
            <Link to="/login" className="link is-size-6 has-text-weight-light">Login</Link>
          </div>
          <div className="navbar-item">
            <Link to="/login" className="link is-size-6 has-text-weight-light">Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
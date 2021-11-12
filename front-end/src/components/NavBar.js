import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../AssetsTest/logo3.png'
import { getPayload } from './helpers/auth'


const NavBar = () => {





  return (
    <nav className="navbar is-black is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title">
            <Link to="/" className="link">
              <img src={Logo} alt="Museum Mapper logo" width="200px" />
            </Link>
          </span>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/museums" className="link is-size-6 has-text-weight-light"><i className="far fa-eye"></i> All Museums</Link>
          </div>
          <div className="navbar-item">
            <Link to="/museums" className="link is-size-6 has-text-weight-light"><i className="fas fa-map-marked-alt"></i> Museums Map</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/register" className="link is-size-6 has-text-weight-light"><i className="fas fa-clipboard-check"></i> Register</Link>
          </div>
          <div className="navbar-item">
            <Link to="/login" className="link is-size-6 has-text-weight-light"><i className="fas fa-sign-in-alt"></i> Login</Link>
          </div>
          <div className="navbar-item">
            <Link to="/" className="link is-size-6 has-text-weight-light"><i className="fas fa-user"></i> Profile</Link>
          </div>
          <div className="navbar-item">
            <Link to="/login" className="link is-size-6 has-text-weight-light"><i className="fas fa-sign-out-alt"></i> Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
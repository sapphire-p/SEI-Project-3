import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../AssetsTest/logo3.png'



const NavBar = () => {







  return (
    <nav className="navbar is-black">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title">
            <Link to="/" className="link">
              <figure>
                <img src={Logo} alt="Museum Mapper logo" width="300px" />
              </figure>
            </Link>
          </span>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/museums" className="link">Show All</Link>
            </div>
          </div>
          <div className="navbar-end">
            {/* {!userIsAuthenticated() ?
              <>
                <div className="navbar-item">
                  <Link to="/register" className="link">Register</Link>
                </div>
                <div className="navbar-item">
                  <Link to="/login" className="link">Login</Link>
                </div>
              </>
              :
              <a className="navbar-item has-text-white" onClick={handleLogout}>Log Out</a>
            } */}


          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
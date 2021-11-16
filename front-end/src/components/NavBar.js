import React, { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getPayload, getTokenFromLocalStorage2 } from './helpers/auth'
import Logo from '../AssetsTest/logo3.png'



const NavBar = () => {
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {

  }, [location.pathname])

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  const username = getTokenFromLocalStorage2()

  return (
    // Removed className 'is-fixed-top' from nav to ensure visibility of Home page Hero and FilterPanel
    <nav className="navbar is-black">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title">
            <Link to="/" className="link">
              <img className="mmlogo" src={Logo} alt="Museum Mapper logo" width="250px" />
            </Link>
          </span>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/museums" className="link is-size-6 has-text-weight-light"><i className="far fa-eye"></i> All Museums</Link>
          </div>
          <div className="navbar-item">
            {userIsAuthenticated() && <Link to="/museumsmap" className="link is-size-6 has-text-weight-light"><i className="fas fa-map-marked-alt"></i> Museums Map</Link>}
          </div>

          <div className="navbar-item">
            <Link to="/exhibits" className="link is-size-6 has-text-weight-light"><i className="fas fa-broom"></i>Exhibits</Link>
          </div>

        </div>
        <div className="navbar-end">
          {!userIsAuthenticated() ?
            <>
              <div className="navbar-item"><Link to="/register" className="link is-size-6 has-text-weight-light"><i className="fas fa-clipboard-check"></i> Register</Link></div>
              <div className="navbar-item"><Link to="/login" className="link is-size-6 has-text-weight-light"><i className="fas fa-sign-in-alt"></i> Login</Link></div>
            </>
            :
            <>
              <div className="navbar-item"><Link to="/profile" className="link is-size-6 has-text-weight-light"><i className="fas fa-user"></i> { username }</Link></div>
              <div className="navbar-item"><a className="link is-size-6 has-text-weight-light" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Logout</a></div>
            </>
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar
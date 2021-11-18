import React, { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getPayload, getTokenFromLocalStorage2 } from './helpers/auth'





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
      <div className="container navbar-items">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title">
            <Link to="/" className="link">
              <img className="mmlogo" src="https://i.imgur.com/7WFWHW1.png" alt="Museum Mapper logo" width="250px" />
            </Link>
          </span>
        </div>
        <div className="navbar-start">
          {/* <div className="navbar-item">
            <Sounds />
          </div> */}
          <div className="navbar-item">
            <Link to="/museums" className="link is-size-6 has-text-weight-light"><i className="far fa-eye has-text-primary"></i> All Museums</Link>
          </div>
          <div className="navbar-item">
            <Link to="/map" className="link is-size-6 has-text-weight-light"><i className="fas fa-map-marked-alt has-text-link-dark"></i> Museums Map</Link>
          </div>

          <div className="navbar-item">
            <Link to="/exhibits" className="link is-size-6 has-text-weight-light"><i className="fas fa-broom has-text-warning"></i> Exhibits</Link>
          </div>

        </div>
        <div className="navbar-end">
          {!userIsAuthenticated() ?
            <>
              <div className="navbar-item"><Link to="/register" className="link is-size-6 has-text-weight-light"><i className="fas fa-clipboard-check has-text-success-dark"></i> Register</Link></div>
              <div className="navbar-item"><Link to="/login" className="link is-size-6 has-text-weight-light"><i className="fas fa-sign-in-alt has-text-danger-dark"></i> Login</Link></div>
            </>
            :
            <>
              <div className="navbar-item"><Link to="/profile" className="link is-size-6 has-text-weight-light"><i className="fas fa-user has-text-info"></i> {username}</Link></div>
              <div className="navbar-item"><a className="link is-size-6 has-text-weight-light" onClick={handleLogout}><i className="fas fa-sign-out-alt has-text-danger-dark"></i> Logout</a></div>
            </>
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar
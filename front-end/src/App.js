import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
// import Register from './components/Register'
import NavBar from './components/NavBar'
import Home from './components/Home'

const App = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/register' component={Register} /> */}

      </Switch>
    </BrowserRouter>
  )
}

export default App
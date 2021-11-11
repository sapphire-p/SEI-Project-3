import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {


  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
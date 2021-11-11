import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/Register'

const App = () => {


  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
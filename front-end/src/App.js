import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/Register'
import MuseumsIndex from './components/MuseumIndex'
import MuseumShow from './components/MuseumShow'

const App = () => {


  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/museums' component={MuseumsIndex}/>
        <Route exact path='/museums/:id' component={MuseumShow}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
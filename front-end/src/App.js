import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/Register'
import MuseumsIndex from './components/MuseumIndex'
import MuseumShow from './components/MuseumShow'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/Home'
import FilterPanel from './components/FilterPanel'

const App = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/museums' component={MuseumsIndex} />
        <Route exact path='/museums/:id' component={MuseumShow} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='/filterpanel' component={FilterPanel} />

      </Switch>
    </BrowserRouter>
  )
}

export default App
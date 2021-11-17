import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/Register'
import MuseumsIndex from './components/MuseumIndex'
import MuseumShow from './components/MuseumShow'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
// import FilterPanel from './components/FilterPanel'
import Profile from './components/Profile'
import FilteredMuseums from './components/FilteredMuseums'
import Map from './components/Map'
import StandoutExihbit from './components/StandoutExhibit'
import Carousel2 from './components/Carousel2'

const App = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <div className="site-wrapper">
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/museums' component={MuseumsIndex} />
          <Route exact path='/museums/:id' component={MuseumShow} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/filterpanel' component={FilterPanel} /> */}
          <Route exact path='/filteredmuseums' component={FilteredMuseums} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/map' component={Map} />
          <Route exact path='/exhibits' component={StandoutExihbit}/>
          <Route exact path='/carousel2' component={Carousel2}/>
          
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
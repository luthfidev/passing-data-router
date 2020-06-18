import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavbarTop from './components/NavbarTop'
import Footer from './components/Footer'

import Home from './pages/home'
import Register from './pages/register'
import Notfound from './pages/notfound';

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavbarTop/>
          
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/register' component={Register}/>
            <Route component={Notfound} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </>
    )
  }
}

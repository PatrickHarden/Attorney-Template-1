import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import Navigation from './containers/Nav'
//
import Routes from 'react-static-routes'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)

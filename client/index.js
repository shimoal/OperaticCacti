import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import About from './components/About'
import Home from './components/Home'
import AllLists from './components/AllLists'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Tour from './components/Tour'
import Tours from './components/Tours'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/Tours" component={Tours}>
        <Route path="/Tours/:TourID" component={Tour}/>
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/AllLists" component={AllLists}/>
      <Route path="/LogIn" component={LogIn}/>
      <Route path="/SignUp" component={SignUp}/>
    </Route>
  </Router>
), document.getElementById('root'))
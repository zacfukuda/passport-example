import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './lib/PrivateRoute'

import Navigation from './component/Navigation'
import Home from './component/Home'
import Signup from './component/Signup'
import Login from './component/Login'
import Logout from './component/Logout'

const App = () => (
  <div>
    <Navigation />
    <main>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </main>
  </div>
)

export default App

import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import isAuthenticated from './isAuthenticated'

// Router that checks if user is logged-in
// If not, redirect to "/login"
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

export default PrivateRoute

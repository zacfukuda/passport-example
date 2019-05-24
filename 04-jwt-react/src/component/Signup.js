import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form action="/signup" method="post">
          <div>
            <label>Username: </label>
            <input type="text" name="username" pattern=".{2,16}" required />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" name="password" pattern=".{6,20}" required />
          </div>
          <div>
            <input type="submit" value="Sign up" />
          </div>
        </form>
      </div>
    )
  }
}

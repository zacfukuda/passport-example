import React, { Component } from 'react'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = { user: {} }
  }

  componentDidMount() {
    fetch('/api/user', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      return res.json()
    }).then(user => {
      this.setState({user: user})
    }).catch( err => {
      console.log(err)
    })
  }

  render() {
    let username = this.state.user.username
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome to Home, {username}.</p>
      </div>
    )
  }
}

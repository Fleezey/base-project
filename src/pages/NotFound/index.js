import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export default class NotFound extends Component {
  render = () => <div>404 Page not Found!</div>
}

function NotFoundRedirect({ location }) {
  return <Redirect to={{ ...location, state: { is404: true } }} />
}

NotFound.Redirect = NotFoundRedirect

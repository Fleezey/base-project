import React  from 'react'
import { Redirect } from 'react-router-dom'


const NotFound = () => <div>404 Page not Found!</div>

function NotFoundRedirect({ location }) {
  return <Redirect to={{ ...location, state: { is404: true } }} />
}


NotFound.Redirect = NotFoundRedirect

export default NotFound

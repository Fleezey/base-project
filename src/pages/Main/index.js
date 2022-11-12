import React from 'react'
import { makeurl } from 'routes'

import { Link } from 'react-router-dom'
import Counter from 'components/counter'

const Main = (props) => (
  <main>
    <Counter />

    <div>
      <Link to={makeurl(props.match.path, '/secondary')}>Go to secondary</Link>
    </div>
  </main>
)

export default Main

import ReactDOM from 'react-dom'
import React from 'react'
import store from './store'

import { Provider } from 'react-redux'
import Routes from 'routes'
import 'index.scss'


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

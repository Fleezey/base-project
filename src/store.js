import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './modules'


const loggerMiddleware = createLogger({
  collapsed: true,
})

const storeMiddlewares = [thunk]
if (process.env.NODE_ENV !== 'production') storeMiddlewares.push(loggerMiddleware)


const store = createStore(rootReducer, {}, applyMiddleware(...storeMiddlewares))


export default store

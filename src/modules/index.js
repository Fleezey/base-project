import { combineReducers } from 'redux'

import Counter from './counter'


const modules = [Counter]

const reducers = modules.reduce((reducerIndices, _module) => {
  reducerIndices[_module.config.moduleKey] = _module.reducers.index
  return reducerIndices
}, {})

const rootReducer = combineReducers({
  ...reducers,
})


export default rootReducer
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension/'

import rootReducer from './modules'


const store = configureStore({
    reducer: rootReducer,
})


export default store

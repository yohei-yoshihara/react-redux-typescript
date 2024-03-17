import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'
import logger from 'redux-logger'
import { thunk } from 'redux-thunk';

import rootReducer from './rootReducer'
import { configure } from '@testing-library/react'

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

// const store = configureStore({
//   reducer: rootReducer
// })

export default store;
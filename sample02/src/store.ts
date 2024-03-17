import { createStore } from 'redux'
import { cakeReducer } from './CakeContainer'

const store = createStore(
  cakeReducer,
)

export default store
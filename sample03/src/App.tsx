import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import UsersContainer from './UsersContainer'

function App () {
  return (
    <Provider store={store}>
      <div>
        <UsersContainer />
      </div>
    </Provider>
  )
}

export default App
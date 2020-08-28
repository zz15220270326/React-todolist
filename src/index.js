import React from 'react'
import ReactDOM from 'react-dom'
import Todolist from './component/Todolist'
// provider
import {Provider} from 'react-redux'
// store
import store from './store'
const App = (
  <Provider store={store}>
    <Todolist />
  </Provider>
)

ReactDOM.render(
  App,
  document.getElementById('App')
)


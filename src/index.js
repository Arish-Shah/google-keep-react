import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App.jsx'
import { GlobalStyle } from './styles/global'
import rootReducer from './store/reducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
)

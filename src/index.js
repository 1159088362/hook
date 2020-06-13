import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router from './router'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

import { store } from './store'
import './index.less'

ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistStore(store)}>
    <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

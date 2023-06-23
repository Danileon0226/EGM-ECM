import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import HomeProvicional from './Pages/HomeProvicional'

import Store from './Store/Store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <HomeProvicional />
    </Provider>
  </React.StrictMode>,
)

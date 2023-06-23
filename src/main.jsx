import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import Store from './Store/Store'
import { Provider } from 'react-redux'
import Home from './Pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    </Provider>
  </React.StrictMode>,
)

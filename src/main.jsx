import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import TasksProvider from './context/TasksProvider.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>


)

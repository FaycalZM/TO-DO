import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import TasksProvider from './context/TasksProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <TasksProvider>
    <Router>
      <App />
    </Router>
  </TasksProvider>

)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
    <ToastContainer/>
  </Router>,
)

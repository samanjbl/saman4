import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <StoreContextProvider>
      <App/>
    </StoreContextProvider>
  </Router>
)




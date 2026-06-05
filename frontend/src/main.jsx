import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// ❌ A linha "import './index.css'" foi removida daqui!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
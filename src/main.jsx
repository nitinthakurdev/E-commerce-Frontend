import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider, ComponentContextProvider, ProductContextProvider } from './context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <ComponentContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ComponentContextProvider>
      </ProductContextProvider>
    </ AuthContextProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './pages/Login'
import Home from './pages/Home'
import Order from './pages/Order'
import Promo from './pages/Promo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './app/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/order' element={<Order />} />
        <Route path='/promo' element={<Promo />} />
      </Routes>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
)

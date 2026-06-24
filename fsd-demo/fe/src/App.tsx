import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Checkout from './pages/Checkout'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:slug' element={<ProductDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  )
}

export default App

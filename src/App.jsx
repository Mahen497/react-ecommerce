
import { Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'


function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error('❌ Error fetching hello:', error);
      });
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path='/checkout' element={<CheckoutPage cart={cart} />} />
        <Route path='/orders' element={<OrdersPage />}></Route>
      </Routes>
    </>
  )
}

export default App

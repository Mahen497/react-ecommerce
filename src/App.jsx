
import { Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'


function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchAppData = async () => {
      try {
        const response = await axios.get('/api/cart-items?expand=product')
        setCart(response.data);
      }
      catch (error) {
        console.error('❌ Error fetching app data:', error);
      }
    }
    fetchAppData();

  }, [])

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path='/checkout' element={<CheckoutPage cart={cart} />} />
        <Route path='/orders' element={<OrdersPage cart={cart} />}></Route>
      </Routes>
    </>
  )
}

export default App

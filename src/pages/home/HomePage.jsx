import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import './Homepage.css'
import { ProductsGrid } from './ProductsGrid'
import { Helmet } from 'react-helmet-async'

export function HomePage({ cart, loadCart }) {

   const [products, setProducts] = useState([]);

   // fetch('http://localhost:3000/api/poducts')
   //    .then((response) => {
   //       if (!response.ok) {
   //          throw new Error('Network response was not ok')
   //       }
   //       return response.json()
   //    })
   //    .then(data => console.log(data))
   //    .catch((error) => {
   //       console.error('❌ There was a problem with the fetch operation:', error)
   //    })


   useEffect(() => {
      const getHomeData = async () => {
         const response = await axios.get('/api/products')
         setProducts(response.data);
      }
      getHomeData();
   }, [])


   return (
      <>
         {/* <Helmet> */}
         <Helmet>
            <title>Home - Ecommerce</title>
         </Helmet>
         {/* </Helmet> */}

         <Header cart={cart} />
         <div className="home-page">
            <ProductsGrid products={products} loadCart={loadCart} />

         </div>
      </>
   )
}
import React from 'react'
import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';

import { OrderDetailsGrid } from './OrderDetailsGrid';
import { OrderHeader } from './OrderHeader';
import { Header } from '../../components/Header'
import './OrdersPage.css'
import { Helmet } from 'react-helmet-async';


export function OrdersPage({ cart }) {
   const [orders, setOrders] = useState([]);

   useEffect(() => {
      axios.get('/api/orders?expand=products')
         .then((response) => {
            setOrders(response.data);
         })
         .catch((error) => {
            console.error('❌ Error fetching orders:', error);
         });
   }, []);

   console.log('orders', orders);

   return (
      <>
         {/* <Helmet> */}
         <Helmet>
            <title>Your Orders - Ecommerce</title>
         </Helmet>

         <Header cart={cart} />
         <div className="orders-page">
            <div className="page-title">Your Orders</div>

            <div className="orders-grid">
               {
                  orders.length === 0 ? (
                     <div className="no-orders-message">You have no orders.</div>
                  ) : (
                     orders.map((order) => {
                        return (
                           <div
                              key={order.id}
                              className="order-container">
                              <OrderHeader order={order} />
                              <OrderDetailsGrid order={order} />
                           </div>
                        );
                     })
                  )
               }
            </div>
         </div>
      </>
   )
}
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './checkout-header.css'
import './CheckoutPage.css'
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';
import { Helmet } from 'react-helmet-async';

export function CheckoutPage({ cart, loadCart }) {

   const [deliveryOption, setDeliveryOption] = useState([]);
   const [paymentSummary, setPaymentSummary] = useState(null);


   useEffect(() => {
      const fetchCheckoutData = async () => {
         try {
            const [deliveryResponse, paymentResponse] = await Promise.all([
               await axios.get('/api/delivery-options?expand=estimatedDeliveryTime'),
               await axios.get('/api/payment-summary')
            ]);
            setDeliveryOption(deliveryResponse.data);
            setPaymentSummary(paymentResponse.data);
         } catch (error) {
            console.error('❌ Error fetching delivery options:', error);
         }
      }

      fetchCheckoutData();

   }, [cart])

   return (
      <>
         {/* <Helmet> */}
         <Helmet>
            <title>Checkout - Ecommerce</title>
         </Helmet>

         <div className="checkout-header" role="banner">
            <div className="header-content">
               <div className="checkout-header-left-section">
                  <a href="/" aria-label="Go to homepage">
                     <img
                        className="logo"
                        src="images/logo.png"
                        alt='Ecommerce logo'
                     />
                     <img
                        className="mobile-logo"
                        src="images/mobile-logo.png"
                        alt='Ecommerce logo'
                     />
                  </a>
               </div>

               <div className="checkout-header-middle-section">
                  Checkout (<a className="return-to-home-link"
                     href="/">3 items</a>)
               </div>

               <div className="checkout-header-right-section">
                  <img src="images/icons/checkout-lock-icon.png" />
               </div>
            </div>
         </div>

         <main className="checkout-page">
            <h1 className="page-title-">Review your order</h1>

            <div className="checkout-grid">
               <OrderSummary
                  cart={cart}
                  deliveryOption={deliveryOption}

                  loadCart={loadCart} />
               <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
            </div>
         </main>
      </>
   )
}

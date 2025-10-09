import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './checkout-header.css'
import './CheckoutPage.css'
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';
import { Helmet } from 'react-helmet-async';

export function CheckoutPage({ cart }) {

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

   }, [])

   function handleDeliveryOptionChange(productId, newOptionId) {
      // Example: update delivery option in cart or backend
      console.log(`Changed delivery option for ${productId} to ${newOptionId}`);
   }


   return (
      <>
         {/* <Helmet> */}
         <Helmet>
            <title>Checkout - Ecommerce</title>
         </Helmet>

         <div className="checkout-header">
            <div className="header-content">
               <div className="checkout-header-left-section">
                  <a href="/">
                     <img className="logo" src="images/logo.png" />
                     <img className="mobile-logo" src="images/mobile-logo.png" />
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

         <div className="checkout-page">
            <div className="page-title">Review your order</div>

            <div className="checkout-grid">
               <OrderSummary cart={cart} deliveryOption={deliveryOption} handleDeliveryOptionChange={(() => handleDeliveryOptionChange)} />
               <PaymentSummary paymentSummary={paymentSummary} />
            </div>
         </div>
      </>
   )
}

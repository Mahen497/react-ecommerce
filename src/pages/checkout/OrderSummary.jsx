import React from 'react'
import dayjs from 'dayjs';
import { DeliveryOptions } from './DeliveryOptions';
import { CartItemDetails } from './CartItemDetails';
import { ProductImage } from './ProductImage';


export function OrderSummary({ cart, deliveryOption, loadCart }) {
   return (
      <>
         <div className="order-summary">
            {
               cart.length === 0 ? (
                  <div className="empty-cart">
                     Your cart is empty.
                  </div>
               ) : (
                  cart.map((cartItem) => {

                     const selectedDeliveryOption = deliveryOption?.find((option) => option.id === cartItem.deliveryOptionId);

                     return (
                        <div key={cartItem.productId} className="cart-item-container">
                           <div className="delivery-date">

                              Delivery date: {
                                 selectedDeliveryOption
                                    ? dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')
                                    : 'Loading...'
                              }
                           </div>

                           <div className="cart-item-details-grid">
                              <ProductImage cartItem={cartItem} />

                              <CartItemDetails cartItem={cartItem} />
                              <DeliveryOptions
                                 cartItem={cartItem}
                                 deliveryOption={deliveryOption}
                                 loadCart={loadCart}
                              />
                           </div>
                        </div>
                     )
                  })
               )
            }
         </div>
      </>
   )
}
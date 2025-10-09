import React from 'react'
import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';
import { DeliveryOptions } from './DeliveryOptions';


export function OrderSummary({ cart, deliveryOption, handleDeliveryOptionChange }) {
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
                              <img className="product-image"
                                 src={cartItem.product.image} />

                              <div className="cart-item-details">
                                 <div className="product-name">
                                    {cartItem.product.name}
                                 </div>
                                 <div className="product-price">
                                    {formatMoney(cartItem?.product?.priceCents || 0)}
                                 </div>
                                 <div className="product-quantity">
                                    <span>
                                       Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                                    </span>
                                    <span className="update-quantity-link link-primary">
                                       Update
                                    </span>
                                    <span className="delete-quantity-link link-primary">
                                       Delete
                                    </span>
                                 </div>
                              </div>

                              <DeliveryOptions
                                 cartItem={cartItem}
                                 deliveryOption={deliveryOption}
                                 handleDeliveryOptionChange={handleDeliveryOptionChange} />
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
import dayjs from 'dayjs'
import React from 'react'
import { formatMoney } from '../../utils/money'

export function DeliveryOptions({ cartItem, deliveryOption, handleDeliveryOptionChange }) {
   return (
      <>
         <div className="delivery-options">
            <fieldset>
               <legend>Choose a delivery option:</legend>
               {
                  deliveryOption.length === 0 ? (
                     <div>Loading delivery options...</div>
                  ) : (
                     deliveryOption.map((option) => {

                        let priceString = option.priceCents > 0 ? `${formatMoney(option.priceCents)} - Shipping` : 'Free Shipping';

                        return (
                           <div key={option.id} className="delivery-option">
                              <input
                                 type="radio"
                                 id={`delivery-${cartItem.productId}-${option.id}`}
                                 checked={cartItem.deliveryOptionId === option.id}
                                 onChange={() => handleDeliveryOptionChange(cartItem.productId, option.id)}
                                 className="delivery-option-input"
                                 name={`delivery-option-${cartItem.productId}`} />
                              <div>
                                 <div className="delivery-option-date">
                                    {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                 </div>
                                 <div className="delivery-option-price">
                                    {priceString}
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  )
               }
            </fieldset>
         </div>
      </>
   )
}

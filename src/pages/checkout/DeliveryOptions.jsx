import dayjs from 'dayjs'
import React from 'react'
import { formatMoney } from '../../utils/money'

export function DeliveryOptions({cartItem, deliveryOption, handleDeliveryOptionChange}) {
   return (
      <>
         <div className="delivery-options">
            <div className="delivery-options-title">
               Choose a delivery option:
            </div>
            {
               deliveryOption.length === 0 ? (
                  <div>Loading delivery options...</div>
               ) : (
                  deliveryOption.map((option) => {

                     let priceString = 'Free Shipping'

                     if (option.priceCents > 0) {
                        priceString = `${formatMoney(option.priceCents)} - Shipping`
                     }
                     return (
                        <div key={option.id} className="delivery-option">
                           <input
                              type="radio"
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
         </div>
      </>
   )
}

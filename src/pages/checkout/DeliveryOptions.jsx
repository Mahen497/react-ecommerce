import dayjs from 'dayjs'
import React from 'react'
import { formatMoney } from '../../utils/money'
import axios from 'axios';

export function DeliveryOptions({ cartItem, deliveryOption, loadCart }) {
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

                        const updateDeliveryOption = async () => {
                           await axios.put(`/api/cart-items/${cartItem.productId}`, {
                              deliveryOptionId: option.id
                           });
                           await loadCart();
                        }

                        return (
                           <div key={option.id} className="delivery-option"
                              onClick={updateDeliveryOption}
                           >
                              <input
                                 type="radio"
                                 id={`delivery-${cartItem.productId}-${option.id}`}
                                 checked={option.id === cartItem.deliveryOptionId}
                                 onChange={()=> { }}
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

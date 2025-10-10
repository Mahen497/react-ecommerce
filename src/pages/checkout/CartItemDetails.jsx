import React, { useState } from 'react'
import { formatMoney } from '../../utils/money'
import axios from 'axios';

export function CartItemDetails({ cartItem, loadCart }) {

   const [quantity, setQuantity] = useState(cartItem.quantity);

   const deleteCartItemHandlder = async () => {
      await axios.delete(`/api/cart-items/${cartItem.productId}`)
      await loadCart();
   }
   
   const updateCartItemHandler = async () => {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
         quantity: quantity
      });
      await loadCart();
   }

   return (
      <>
         <div className="cart-item-details">
            <div className="product-name">
               {cartItem.product.name}
            </div>
            <div className="product-price">
               {formatMoney(cartItem?.product?.priceCents || 0)}
            </div>
            <div className="product-quantity">
               <span>
                  Quantity:
                  <input
                     type="number"
                     min="1"
                     value={quantity}
                     onChange={e => setQuantity(Number(e.target.value))}
                     className="quantity-input"
                     style={{ width: 50, marginLeft: 8 }}
                  />
               </span>
               <br /><br />
               <span
                  className="update-quantity-link link-primary"
                  onClick={updateCartItemHandler}
                  style={{ cursor: 'pointer' }}
               >
                  Update
               </span>
               <span
                  className="delete-quantity-link link-primary"
                  onClick={deleteCartItemHandlder}
                  style={{ cursor: 'pointer' }}
               >
                  Delete
               </span>
            </div>
         </div>
      </>
   )
}
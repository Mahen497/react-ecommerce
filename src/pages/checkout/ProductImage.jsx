import React from 'react'

export function ProductImage({cartItem}) {
   return (
      <>
         <img 
            className="product-image"
            src={cartItem.product.image} 
            alt={cartItem.product.name}
            loading="lazy"
            />
      </>
   )
}
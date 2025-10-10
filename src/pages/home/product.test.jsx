import { it, expect, describe, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Product } from './product'

// integration Test
describe('Product', () => {
   it('displays product details correctly', () => {

      const product = {
         id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
         image: "images/products/athletic-cotton-socks-6-pairs.jpg",
         name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
         rating: {
            stars: 4.5,
            count: 87
         },
         priceCents: 1090,
         keywords: ["socks", "sports", "apparel"]
      }; // Sample product data

      const loadCart = vi.fn(); // Mock function for loadCart

      render(<Product product={product} loadCart={loadCart} />); // Render the component

      // screen.debug(); // This will print the current HTML structure to the console

      expect(
         screen.getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
      ).toBeInTheDocument(); // Product name

      expect(
         screen.getByText('$10.90') 
      ).toBeInTheDocument(); // Product price

      expect(
         screen.getByTestId('product-image')
      ).toHaveAttribute('src','images/products/athletic-cotton-socks-6-pairs.jpg'); // Product image

      expect(
         screen.getByTestId('product-rating-img')
      ).toHaveAttribute('src','images/ratings/rating-45.png'); // Product rating image

      expect(
         screen.getByText('87')
      ).toBeInTheDocument(); // Product rating count


   }); // it displays product details correctly
}); // describe Product

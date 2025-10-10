import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Product } from './product';
import axios from 'axios';

vi.mock('axios');

// integration Test
describe('Product', () => {

   let product;
   let loadCart;

   beforeEach(() => {
      product = {
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
      loadCart = vi.fn(); // Reset the mock function before each test
      
      render(<Product product={product} loadCart={loadCart} />); // Render the component
   });

   it('displays product details correctly', () => {

      // screen.debug(); // This will print the current HTML structure to the console

      expect(
         screen.getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
      ).toBeInTheDocument(); // Product name

      expect(
         screen.getByText('$10.90')
      ).toBeInTheDocument(); // Product price

      expect(
         screen.getByTestId('product-image')
      ).toHaveAttribute('src', 'images/products/athletic-cotton-socks-6-pairs.jpg'); // Product image

      expect(
         screen.getByTestId('product-rating-img')
      ).toHaveAttribute('src', 'images/ratings/rating-45.png'); // Product rating image

      expect(
         screen.getByText('87')
      ).toBeInTheDocument(); // Product rating count

   }); // it displays product details correctly

   it('calls loadCart when "Add to Cart" is clicked', async () => {

      const user = userEvent.setup();
      const addToCartButton = screen.getByTestId('add-to-cart-button');
      await user.click(addToCartButton) // Simulate user clicking the "Add to Cart" button

      expect(axios.post).toHaveBeenCalledWith('/api/cart-items', {
         productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
         quantity: 1
      }); // it makes the correct API call
      expect(loadCart).toHaveBeenCalled();

   }); // it calls loadCart when "Add to Cart" is clicked

}); // describe Product

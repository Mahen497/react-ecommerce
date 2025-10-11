# React E-Commerce Project

## Overview

This project is a simple, modular **E-Commerce web application** built with React. It allows users to browse products, add them to a cart, update quantities, and proceed to checkout. The project is structured for clarity and scalability, making it easy to extend with more features like authentication or payment integration.

---

## Features

- **Product Listing:** Browse all available products on the homepage.
- **Product Details:** View detailed information about each product.
- **Add to Cart:** Add products to your shopping cart from the listing or details page.
- **Cart Management:** Update product quantities or remove items from the cart.
- **Checkout:** Review your cart and proceed to checkout.
- **Responsive Design:** Optimized for both desktop and mobile devices.
# React E-Commerce Project

## Overview

This project is a modular **E-Commerce web application** built with React for the frontend and Node.js/Express for the backend. It allows users to browse products, manage a shopping cart, and proceed to checkout. The project is structured for clarity and scalability, and includes unit testing with Vitest.

---

## Features

- **Product Listing:** Browse all available products on the homepage.
- **Product Details:** View detailed information about each product.
- **Add to Cart:** Add products to your shopping cart from the listing or details page.
- **Cart Management:** Update product quantities or remove items from the cart.
- **Checkout:** Review your cart and proceed to checkout.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Backend API:** Node.js/Express backend for product and cart data.
- **Unit Testing:** Vitest is set up for frontend unit tests.

---

## Folder Structure

```
react-ecommerce/
├── backend/
│   ├── server.js
│   └── ... (backend routes, models)
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   │   └── checkout/
│   │       └── CartItemDetails.jsx
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── package.json
├── vitest.config.js
└── README.md
```

---

## Components & Pages

### Components

- **Header.jsx:** Site logo, navigation, cart icon.
- **Footer.jsx:** Site footer.
- **ProductCard.jsx:** Individual product display.
- **CartIcon.jsx:** Cart icon with item count.

### Pages

- **Home.jsx:** Product grid.
- **ProductDetails.jsx:** Product info and add to cart.
- **Cart.jsx:** Cart management.
- **checkout/CartItemDetails.jsx:** Update/remove cart items.

---

## How the App Works

1. **Frontend:**  
   Users browse products, add to cart, and manage their cart. State is managed with React hooks or context.

2. **Backend:**  
   Node.js/Express serves product and cart data via REST API endpoints.

3. **Testing:**  
   Vitest is used for unit testing React components and logic.

---

## How to Run

### 1. Backend

```bash
cd backend
npm install
node server.js
```
- The backend will run on [http://localhost:5000](http://localhost:5000) (or your configured port).

### 2. Frontend

```bash
npm install
npm start
```
- The frontend will run on [http://localhost:3000](http://localhost:3000).

---

## Running Tests with Vitest

Vitest is set up for unit testing React components.

- To run all tests:
  ```bash
  npx vitest
  ```
- To run tests in watch mode:
  ```bash
  npx vitest --watch
  ```
- Test files are typically in `src/__tests__/` or alongside components as `*.test.jsx`.

---

## Customization & Extension Ideas

- Connect to a real database for persistent data.
- Add authentication for user accounts.
- Integrate payment gateways.
- Add product categories, search, and filters.

---

## License

This project is for learning and demonstration purposes.

---

## Folder Structure

```
react-ecommerce/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CartIcon.jsx
│   │   └── ... (other reusable UI components)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   └── checkout/
│   │       └── CartItemDetails.jsx
│   ├── App.jsx
│   ├── index.js
│   └── ... (styles, utils, etc.)
├── package.json
└── README.md
```

---

## Components & Pages

### Components

- **Header.jsx:**  
  Displays the site logo, navigation links, and cart icon with item count.

- **Footer.jsx:**  
  Shows site copyright.

- **ProductCard.jsx:**  
  Renders individual product information (image, title, price, add to cart button).

- **CartIcon.jsx:**  
  Shows a cart icon and the number of items in the cart.

---

### Pages

- **Home.jsx:**  
  The main landing page. Displays a grid of all products using `ProductCard` components.

- **ProductDetails.jsx:**  
  Shows detailed information about a selected product, including description, price, and an add to cart button.

- **Cart.jsx:**  
  Displays all items currently in the user's cart. Allows updating quantities or removing items.

- **checkout/CartItemDetails.jsx:**  
  For each cart item, allows the user to:
  - View product name, price, and current quantity.
  - Update the quantity (with an input and update button).
  - Remove the item from the cart.

---

## How the App Works

1. **Product Browsing:**  
   Users land on the homepage and see a list of products. Clicking a product shows more details.

2. **Adding to Cart:**  
   Users can add products to their cart from the product list or details page.

3. **Cart Management:**  
   The cart page lists all selected products. Users can:
   - Change the quantity of each item (which updates the cart state).
   - Remove items from the cart.

4. **Checkout:**  
   The checkout page summarizes the cart. Users can review and finalize their order (payment integration can be added).

5. **State Management:**  
   Cart state is managed using React hooks or context, ensuring updates reflect across all components.

---

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open in browser:**  
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Customization & Extension Ideas

- **Connect to a real backend/API** for products and cart.
- **Add authentication** for user accounts and order history.
- **Integrate payment gateways** for real purchases.
- **Add product categories, search, and filters** for better UX.
- **Improve UI/UX** with more animations and feedback.

---

## License

This project is for learning and demonstration purposes.

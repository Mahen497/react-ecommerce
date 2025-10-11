import { useState } from "react";
import { Product } from "./product"
import Pagination from "../../components/Pagination";

export function ProductsGrid({ products, loadCart }) {
   // const productsPerPage = 6;
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(5);

   const indexOfLastItem = currentPage * itemsPerPage;
   // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const indexOfFirstItem = currentPage * itemsPerPage - itemsPerPage;
   const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

   return (
      <>
         <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            products={products}
         />

         <div className="products-grid">
            {
               currentItems.map((product) => {
                  return (
                     <Product key={product.id} product={product} loadCart={loadCart} />
                  )
               })
            }
         </div>
      </>
   )
}

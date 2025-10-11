import { useEffect, useState } from "react";
import { Product } from "./product"

export function ProductsGrid({ products, loadCart }) {
   // const productsPerPage = 6;
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(5);

   const totalPages = Math.ceil(products.length / itemsPerPage);

   const goToPrevPage = () => {
      // setCurrentPage(currentPage - 1);
      setCurrentPage((prev) => Math.max(prev - 1, 1));

   }
   const goToNextPage = () => {
      // setCurrentPage(currentPage + 1);
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));

   }

   const goToSpecificPage = (pageNumber) => {
      setCurrentPage(pageNumber)
   }

   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

   useEffect(() => {
      setCurrentPage(1); // Reset to first page when products change
   }, [products])


   console.log("ProductsGrid Rendered: ", { currentPage, totalPages, indexOfLastItem, indexOfFirstItem, currentItems });

   return (
      <>
         {/* Pagination */}
         <div className="pagination">
            <button
               aria-label="Previous Page"
               onClick={goToPrevPage}
               disabled={currentPage === 1}
            >Previous</button>
            {
               Array.from({ length: totalPages }, (_, i) => (
                  <button
                     key={i}
                     className={currentPage === i + 1 ? 'active' : ''}
                     onClick={() => goToSpecificPage(i + 1)}
                     aria-label={`Page ${i + 1}`}
                  >
                     {i + 1}
                  </button>
               ))
            }
            <button
               aria-label="Next Page"
               onClick={goToNextPage}
               disabled={currentPage === totalPages}
            >Next</button>
         </div>

         <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
         >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
         </select >


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
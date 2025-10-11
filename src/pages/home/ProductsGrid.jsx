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
   // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const indexOfFirstItem = currentPage * itemsPerPage - itemsPerPage; 5

   console.log('indexOfLastItem, indexOfFirstItem', indexOfLastItem, indexOfFirstItem)

   const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

   useEffect(() => {
      setCurrentPage(1); // Reset to first page when products change
   }, [products, itemsPerPage])

   const generatePageNumbers = () => {

      const pages = [];
      const maxPagesToShow = 5;


      if (totalPages <= maxPagesToShow) {
         console.log("✔️ Total Pages:", totalPages, "<= Max PagesToShow: ", maxPagesToShow);

         for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
         }
      } else {
         pages.push(1);

         console.log('currentPage :', currentPage, 'totalPages :', totalPages);

         if (currentPage > 3) {
            pages.push('...')
         }

         const start = Math.max(2, currentPage - 1);
         const end = Math.min(totalPages - 1, currentPage + 1);

         console.log({ start, end });

         for (let i = start; i <= end; i++) {
            console.log("Adding page: ", i);
            pages.push(i);
         }

         if (currentPage < totalPages - 2) {
            pages.push('...')
         }
         pages.push(totalPages);
         console.log("❌ Total Pages:", totalPages, "<= Max PagesToShow: ", maxPagesToShow);
      }

      return pages;
   }
   const pageNumbers = generatePageNumbers();
   console.log('pageNumbers : ', pageNumbers);

   return (
      <>
         {/* Pagination */}
         <div className="pagination">
            <button
               aria-label="Previous Page"
               onClick={goToPrevPage}
               disabled={currentPage === 1}
            >Previous</button>
            {/* {
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
            } */}
            {

               pageNumbers.map((page, index) => {
                  if (page === '...') {
                     return <span key={Math.random(index)} className="px-2">...</span>;
                  }
                  return (
                     <button
                        key={page + 1}
                        className={currentPage === page ? 'active' : ''}
                        onClick={() => goToSpecificPage(page)}
                        aria-label={`Page ${page}`}
                     >
                        {page}
                     </button>
                  )
               })

               //    key={page}
               //    className={currentPage === page ? "active" : ""}
               //    onClick={() => goToSpecificPage(page)}
               //    aria-label={`Page ${page}`}
               // >
               //    {page}
               // </button>
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
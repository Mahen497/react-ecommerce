import React, { useEffect, useMemo } from 'react'

function Pagination({ products, currentPage, setCurrentPage, itemsPerPage, setItemsPerPage }) {

   const totalPages = Math.ceil(products.length / itemsPerPage);

   const goToPrevPage = () => {
      // setCurrentPage(currentPage - 1);
      setCurrentPage((prev) => Math.max(prev - 1, 1));
   }
   const goToNextPage = () => {
      // setCurrentPage(currentPage + 1);
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
   }
   const goToSpecificPage = (pageNumber) => setCurrentPage(pageNumber)

   // Reset if out of range
   useEffect(() => {
      if (currentPage > totalPages) setCurrentPage(totalPages);
   }, [currentPage,setCurrentPage, itemsPerPage, totalPages, ]);

   useEffect(() => {
      setCurrentPage(1);
   }, [products, setCurrentPage]);

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
   // const pageNumbers = generatePageNumbers();


   const pageNumbers = useMemo(() => generatePageNumbers(), [currentPage, totalPages]);


   return (
      <>
         <nav className='pagination' aria-label='product- Pages'>
            <button
               aria-label="Previous Page"
               onClick={goToPrevPage}
               disabled={currentPage <= 1}
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
                     return <span key={`ellipsis-${index}`} className="px-2">...</span>;
                  }
                  return (
                     <button
                        key={`page-${page}`}
                        className={currentPage === page ? 'active' : ''}
                        onClick={() => goToSpecificPage(page)}
                        aria-label={`Page ${page}`}
                     >
                        {page}
                     </button>
                  )
               })
            }

            <button
               aria-label="Next Page"
               onClick={goToNextPage}
               disabled={currentPage >= totalPages}
            >Next</button>

         </nav>

         <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
         >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
         </select >
      </>
   )
}

export default Pagination
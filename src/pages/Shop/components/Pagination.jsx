import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  return (
    <div className="flex justify-center items-center my-8 gap-2">
      <button
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-10 h-10 text-sm font-medium border border-coffee-200 dark:border-coffee-600 dark:text-white rounded-full hover:bg-amber-700 hover:text-white hover:border-amber-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <GrPrevious />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`flex items-center justify-center w-10 h-10 text-sm font-medium rounded-full border transition-all ${
            currentPage === page
              ? "bg-amber-700 text-white border-amber-700"
              : "border-coffee-200 dark:border-coffee-600 dark:text-white hover:bg-amber-700 hover:text-white hover:border-amber-700"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-10 h-10 text-sm font-medium border border-coffee-200 dark:border-coffee-600 dark:text-white rounded-full hover:bg-amber-700 hover:text-white hover:border-amber-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Pagination;

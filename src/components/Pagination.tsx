import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  // Calculate page numbers to show
  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // First page
        i === totalPages || // Last page
        (i >= currentPage - delta && i <= currentPage + delta) // Pages around current
      ) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <nav className="flex justify-center items-center gap-2 mt-8" aria-label="Pagination">
      {/* Previous button */}
      <Link
        href={`/?page=${currentPage - 1}`}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors
          ${currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"}`}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : 0}
        onClick={(e) => currentPage === 1 && e.preventDefault()}
      >
        ←<span className="ml-2">Previous</span>
      </Link>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((pageNum, index) =>
          pageNum === "..." ? (
            <span key={`dots-${index}`} className="px-4 py-2 text-gray-500">
              {pageNum}
            </span>
          ) : (
            <Link
              key={pageNum}
              href={`/?page=${pageNum}`}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
                ${pageNum === currentPage ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
              aria-current={pageNum === currentPage ? "page" : undefined}
            >
              {pageNum}
            </Link>
          )
        )}
      </div>

      {/* Next button */}
      <Link
        href={`/?page=${currentPage + 1}`}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors
          ${currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"}`}
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : 0}
        onClick={(e) => currentPage === totalPages && e.preventDefault()}
      >
        <span className="mr-2">Next</span>→
      </Link>
    </nav>
  );
}

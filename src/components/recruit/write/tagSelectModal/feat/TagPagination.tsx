import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { TagPaginationInterface } from './TagList'

const TagPagination = ({
  currentPage,
  totalPage,
  onPageChange,
  maxPage = 5,
}: TagPaginationInterface) => {
  return (
    <div className="flex justify-center space-x-2">
      <button
        className="size-8 cursor-pointer rounded-sm border border-gray-300 px-2 py-2 disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-[rgb(128,128,128)]"
        disabled={currentPage === 1}
      >
        <ChevronLeft className="size-4" />
      </button>

      <button
        className="size-8 cursor-pointer rounded-sm border border-gray-300 px-2 py-2 disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-[rgb(128,128,128)]"
        disabled={currentPage === totalPage}
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  )
}

export default TagPagination

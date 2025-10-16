import type { TagPaginationInterface } from './TagList'

const TagPagination = ({
  currentPage,
  totalPage,
  onPageChange,
  maxPage = 5,
}: TagPaginationInterface) => {
  return <div className="flex justify-center space-x-2"></div>
}

export default TagPagination

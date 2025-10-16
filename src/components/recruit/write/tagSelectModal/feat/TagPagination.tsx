import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { TagPaginationInterface } from './TagList'

const TagPagination = ({
  currentPage, // 현재 페이지
  totalPage, // 총 몇 페이지 있는지
  onPageChange, // 페이지 전환 함수
  maxPage = 9, // 출력할 번호 개수
}: TagPaginationInterface) => {
  // 총 페이지 수 만큼 출력,
  // Todo 추후에 출력할 번호 개수로 분기처리 할것
  const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1)

  return (
    <div className="flex justify-center space-x-2">
      {/* 이전 버튼 */}
      <button
        className="size-8 cursor-pointer rounded-sm border border-gray-300 px-2 py-2 hover:bg-[#ca8a04] active:bg-[#a16207] disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-white disabled:text-[rgb(128,128,128)]"
        disabled={currentPage === 1}
      >
        <ChevronLeft className="size-4" />
      </button>

      {/* 페이지 번호 출력 부분 */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`size-8 cursor-pointer rounded-sm border border-gray-300 px-2 py-0 hover:bg-[#ca8a04] active:bg-[#a16207] ${currentPage === number ? 'bg-[#eab308]' : 'bg-white'} `}
        >
          <span className="size-4">{number}</span>
        </button>
      ))}

      {/* 다음 버튼 */}
      <button
        className="size-8 cursor-pointer rounded-sm border border-gray-300 px-2 py-2 hover:bg-[#ca8a04] active:bg-[#a16207] disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-white disabled:text-[rgb(128,128,128)]"
        disabled={currentPage === totalPage}
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  )
}

export default TagPagination

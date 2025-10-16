import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { TagPaginationInterface } from './TagList'
import { useMemo } from 'react'

const TagPagination = ({
  currentPage, // 현재 페이지
  totalPage, // 총 몇 페이지 있는지
  onPageChange, // 페이지 전환 함수
  maxPage = 9, // 출력할 번호 개수
}: TagPaginationInterface) => {
  // 총 페이지 수 만큼 출력,

  const pageNumbers = useMemo(() => {
    // 최대 페이지(9) 보다 작으면 전부 출력
    const halfPage = Math.floor(maxPage / 2) //

    if (totalPage <= maxPage) {
      return Array.from({ length: totalPage }, (_, i) => i + 1)
    }

    // 화면상 시작 페이지 ~ 화면상 마지막 페이지

    let startPage = currentPage - halfPage
    let endPage = currentPage + halfPage

    // 시작 페이지, 마지막 페이지에서 1에서 totalPage를 벗어나지 못하도록 함

    if (startPage < 1) {
      startPage = 1
      endPage = maxPage
    }
    // 마지막 페이지 totalpage 보다 커질 경우..
    if (endPage > totalPage) {
      endPage = totalPage
      startPage = totalPage - maxPage + 1
    }
    // 시작페이지 ~ 마지막 페이지
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    )
  }, [totalPage, currentPage, maxPage])

  return (
    <div className="flex justify-center space-x-2">
      {/* 이전 버튼 */}
      <button
        className="size-8 cursor-pointer rounded-sm border border-gray-300 px-2 py-2 hover:bg-[#ca8a04] active:bg-[#a16207] disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-white disabled:text-[rgb(128,128,128)]"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="size-4" />
      </button>

      {/* 페이지 번호 출력 부분 */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`size-8 cursor-pointer rounded-sm border border-gray-300 px-2 py-0 hover:bg-[#ca8a04] active:bg-[#a16207] ${currentPage === number ? 'bg-[#eab308]' : 'bg-white'} `}
          onClick={() => onPageChange(number)}
        >
          <span className="size-4">{number}</span>
        </button>
      ))}

      {/* 다음 버튼 */}
      <button
        className="size-8 cursor-pointer rounded-sm border border-gray-300 px-2 py-2 hover:bg-[#ca8a04] active:bg-[#a16207] disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-white disabled:text-[rgb(128,128,128)]"
        disabled={currentPage === totalPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  )
}

export default TagPagination

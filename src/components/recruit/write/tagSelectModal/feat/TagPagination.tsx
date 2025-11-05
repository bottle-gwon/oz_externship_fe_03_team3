import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { TagPaginationInterface } from './TagList'
import { useMemo } from 'react'
import { Hstack } from '@/components/commonInGeneral/layout'
import Button from '@/components/commonInGeneral/button/Button'

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

  const leftCursorStatus = currentPage === 1 ? 'disabled' : 'enabled'
  const rightCusorStatus = currentPage === totalPage ? 'disabled' : 'enabled'

  return (
    <Hstack gap="sm" className="items-center justify-center">
      {/* 이전 버튼 */}
      <Button
        color="primary"
        shape="square"
        size="md"
        status={leftCursorStatus}
        onClick={() => onPageChange(currentPage - 1)}
        className="border border-gray-300 bg-white !px-2.5 !text-black hover:!text-white active:!text-white disabled:cursor-not-allowed disabled:bg-white disabled:!text-black"
      >
        <ChevronLeft className="size-4" />
      </Button>

      {/* 페이지 번호 출력 부분 */}
      {pageNumbers.map((number) => (
        <Button
          key={number}
          color="primary"
          shape="square"
          size="md"
          onClick={() => onPageChange(number)}
          className={`bg-white !text-black hover:!text-white active:!text-white disabled:cursor-not-allowed disabled:bg-white disabled:!text-black ${currentPage === number ? '!bg-primary-500 !text-white' : 'border border-gray-300 bg-white'}`}
        >
          <span className="size-6 text-base">{number}</span>
        </Button>
      ))}

      {/* 다음 버튼 */}
      <Button
        color="primary"
        shape="square"
        size="md"
        status={rightCusorStatus}
        onClick={() => onPageChange(currentPage + 1)}
        className="border border-gray-300 bg-white !px-2.5 !text-black hover:!text-white active:!text-white disabled:cursor-not-allowed disabled:bg-white disabled:!text-black"
      >
        <ChevronRight className="size-4" />
      </Button>
    </Hstack>
  )
}

export default TagPagination

import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { TagPaginationInterface } from './TagList'
import { useMemo } from 'react'
import { Hstack } from '@/components/commonInGeneral/layout'
import Button from '@/components/commonInGeneral/button/Button'
import useTagStore from '@/store/tag/tagStore'

const TagPagination = ({
  maxPage = 9, // 출력할 번호 개수
}: TagPaginationInterface) => {
  // 총 페이지 수 만큼 출력,
  const page = useTagStore((state) => state.page)
  const setPage = useTagStore((state) => state.setPage)
  const totalPage = useTagStore((state) => state.totalPage)

  const pageNumbers = useMemo(() => {
    // 최대 페이지(9) 보다 작으면 전부 출력
    const halfPage = Math.floor(maxPage / 2) //

    if (totalPage <= maxPage) {
      return Array.from({ length: totalPage }, (_, i) => i + 1)
    }

    // 화면상 시작 페이지 ~ 화면상 마지막 페이지

    let startPage = page - halfPage
    let endPage = page + halfPage

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
  }, [totalPage, page, maxPage])

  const leftCursorStatus = page === 1 ? 'disabled' : 'enabled'
  const rightCusorStatus = page === totalPage ? 'disabled' : 'enabled'

  return (
    <Hstack gap="sm" className="items-center justify-center">
      {/* 이전 버튼 */}
      <Button
        color="primary"
        shape="square"
        size="md"
        status={leftCursorStatus}
        onClick={() => setPage(page - 1)}
        className="border border-gray-300 bg-white !px-2.5 !text-black hover:!text-white active:!text-white disabled:!cursor-not-allowed disabled:bg-white disabled:!text-black"
      >
        <ChevronLeft className="size-4" />
      </Button>

      {/* 페이지 번호 출력 부분 */}
      {pageNumbers.map((number) => (
        <Button
          key={number}
          color={page === number ? 'primary' : 'mono'}
          variant={page === number ? 'contained' : 'outlined'}
          shape="square"
          size="md"
          onClick={() => setPage(number)}
        >
          <span className="text-base">{number}</span>
        </Button>
      ))}

      {/* 다음 버튼 */}
      <Button
        color="primary"
        shape="square"
        size="md"
        status={rightCusorStatus}
        onClick={() => setPage(page + 1)}
        className="border border-gray-300 bg-white !px-2.5 !text-black hover:!text-white active:!text-white disabled:!cursor-not-allowed disabled:bg-white disabled:!text-black"
      >
        <ChevronRight className="size-4" />
      </Button>
    </Hstack>
  )
}

export default TagPagination

import { useState } from 'react'
import TagCard from './TagCard'
import TagPagination from './TagPagination'

// 페이지 네이션 타입
export interface TagPaginationInterface {
  currentPage: number
  totalPage: number
  onPageChange: (newPage: number) => void // 페이지 전환 함수 정의
  maxPage?: number
}

const TagList = () => {
  // 임시 페이지 데이터 추후 API 설정시 다시 작성
  const [current, setCurrent] = useState(1)

  // 임시 페이지 변경 함수
  const handlePageChange = (newPage: number) => {
    setCurrent(newPage)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-[24px]">
      <TagCard name="초보자 환영" isChecked />
      <TagPagination
        currentPage={current}
        totalPage={15}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default TagList

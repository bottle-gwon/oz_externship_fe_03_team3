import TagCard from './TagCard'

// 페이지 네이션 타입
export interface TagPaginationInterface {
  currentPage: number
  totalPage: number
  onPageChange: (newPage: number) => void // 페이지 전환 함수 정의
  maxPage?: number
}

const TagList = () => {
  return (
    <div>
      <TagCard />
    </div>
  )
}

export default TagList

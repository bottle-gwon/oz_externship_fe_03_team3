import { Vstack } from '@/components/commonInGeneral/layout'
import TagCard from './TagCard'
import TagPagination from './TagPagination'
import type { TagApiResponse } from '@/types'

// 페이지 네이션 타입
type pageChange = (newPage: number) => void
type tagSelect = (select: string) => void

export interface TagPaginationInterface {
  currentPage: number
  totalPage: number
  onPageChange: pageChange // 페이지 전환 함수 정의
  maxPage?: number
}

// {tags, page, page_size, total_count} :TagApiResponse
// api 적용시 사용
interface TagListInterface extends TagApiResponse {
  onPageChange: pageChange
  onSelectTag: tagSelect
  selectArray: string[]
}

const TagList = ({
  tags,
  page,
  page_size,
  total_count,
  onPageChange,
  onSelectTag,
  selectArray,
}: TagListInterface) => {
  if (!tags || !page || !page_size || !total_count) {
    return
  }

  return (
    <Vstack gap="xl" className="items-center justify-center">
      <Vstack gap="sm" className="items-center justify-center">
        {tags?.map((el) => (
          <TagCard
            key={el.id + el.name}
            name={el.name}
            isChecked={selectArray.includes(el.name)}
            onClickTag={onSelectTag}
          />
        ))}
      </Vstack>
      {/* <TagCard name="초보자 환영" isChecked /> */}

      <TagPagination
        currentPage={page}
        totalPage={total_count / 5}
        // currentPage={page} //페이지 네이션 테스트
        // totalPage={15}
        onPageChange={onPageChange}
      />
    </Vstack>
  )
}

export default TagList

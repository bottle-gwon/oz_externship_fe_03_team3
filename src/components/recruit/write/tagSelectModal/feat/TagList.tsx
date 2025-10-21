import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import TagCard from './TagCard'
import TagPagination from './TagPagination'
import type { TagApiResponse } from '@/types'
import TagSearchEmpty from './TagSearchEmpty'

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
  keyword: string //검색 키워드
}

const TagList = ({
  tags,
  page,
  page_size,
  total_count,
  onPageChange,
  onSelectTag,
  selectArray,
  keyword,
}: TagListInterface) => {
  if (!tags || !page || !page_size) {
    return
  }

  // 검색 결과 없음 새로운 태그 추가
  if (total_count === 0) {
    return <TagSearchEmpty keyword={keyword} onClickAddTag={onSelectTag} />
  }

  return (
    <Vstack
      gap="xl"
      className="-mx-6 -mb-6 h-[426px] w-[672px] items-center justify-center"
    >
      <Vstack gap="sm" className="h-[314px] items-center justify-start">
        <Hstack className="w-full items-start justify-start self-start">
          <p className="text-sm font-medium">{`사용가능한 태그 (${total_count}개)`}</p>
        </Hstack>
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
        totalPage={Math.ceil(total_count / 5)}
        // currentPage={page} //페이지 네이션 테스트
        // totalPage={15}
        onPageChange={onPageChange}
      />
    </Vstack>
  )
}

export default TagList

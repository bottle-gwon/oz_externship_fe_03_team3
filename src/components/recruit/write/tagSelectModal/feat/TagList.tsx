import { useState } from 'react'
import TagCard from './TagCard'
import TagPagination from './TagPagination'
import type { TagApiResponse } from '../../../../../types'

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

const TagList = ({ tags, page, page_size, total_count }: TagApiResponse) => {
  // 임시 페이지 데이터 추후 API 설정시 다시 작성
  const [current, setCurrent] = useState(1)
  const [testSelectArray, setTestSelectArray] = useState(['AI', '밥']) //selectArray 대신 넣었습니다.
  if (!tags || !page || !page_size || !total_count) {
    return
  }
  // 임시 페이지 변경 함수
  const handlePageChange = (newPage: number) => {
    setCurrent(newPage)
  }

  const onClickTag = (newName: string) => {
    if (testSelectArray.includes(newName)) {
      setTestSelectArray((prev) => prev.filter((el) => el !== newName))
    } else {
      setTestSelectArray((prev) => [...prev, newName])
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-[24px]">
      <div className="flex flex-col gap-[8px]">
        {tags?.map((el) => (
          <TagCard
            key={el.id + el.name}
            name={el.name}
            isChecked={testSelectArray.includes(el.name)}
            onClickTag={onClickTag}
          />
        ))}
      </div>
      {/* <TagCard name="초보자 환영" isChecked /> */}

      <TagPagination
        // currentPage={page}
        // totalPage={total_count / 5}
        currentPage={current} //페이지 네이션 테스트
        totalPage={15}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default TagList

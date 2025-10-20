import { useState } from 'react'
import TagList from '@/components/recruit/write/tagSelectModal/feat/TagList'
import TagSelection from '@/components/recruit/write/tagSelectModal/feat/TagSelection'

const EXAMPLE_DATA = {
  tags: [
    { id: 1, name: 'Python' },
    { id: 2, name: 'AI' },
    { id: 3, name: '딥러닝' },
    { id: 4, name: '밥' },
    { id: 5, name: 'C언어' },
  ],
  page: 1,
  page_size: 5,
  total_count: 50,
}

const GwonTestPage = () => {
  // 임시 데이터
  const [current, setCurrent] = useState(1)
  const [testSelectArray, setTestSelectArray] = useState(['AI', '밥']) //selectArray 대신 넣었습니다.

  // 임시 페이지 변경 함수
  const handlePageChange = (newPage: number) => {
    setCurrent(newPage)
  }
  // 임시 변경 함수
  const onClickTag = (newName: string) => {
    if (testSelectArray.includes(newName)) {
      setTestSelectArray((prev) => prev.filter((el) => el !== newName))
    } else {
      setTestSelectArray((prev) => [...prev, newName])
    }
  }
  // 임시 제거 함수
  const onClickDeleteTag = (tagName: string) => {
    if (testSelectArray.includes(tagName)) {
      setTestSelectArray((prev) => prev.filter((el) => el !== tagName))
    }
  }
  return (
    <div className="mt-10">
      {testSelectArray.length !== 0 && (
        <TagSelection
          tagArray={testSelectArray}
          onDeleteTag={onClickDeleteTag}
        />
      )}
      <TagList
        tags={EXAMPLE_DATA.tags}
        // page={EXAMPLE_DATA.page}
        page={current} // 페이지 네이션 테스트
        page_size={EXAMPLE_DATA.page_size}
        total_count={EXAMPLE_DATA.total_count}
        onPageChange={handlePageChange}
        onSelectTag={onClickTag}
        selectArray={testSelectArray}
      />
    </div>
  )
}

export default GwonTestPage

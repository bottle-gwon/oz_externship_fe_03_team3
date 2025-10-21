import { useState } from 'react'
import TagList from '@/components/recruit/write/tagSelectModal/feat/TagList'
import TagSelection from '@/components/recruit/write/tagSelectModal/feat/TagSelection'
import TagSearch from '@/components/recruit/write/tagSelectModal/feat/TagSearch'

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
  const [exData, setExdata] = useState(EXAMPLE_DATA)
  const [testSelectArray, setTestSelectArray] = useState(['AI', '밥']) //selectArray 대신 넣었습니다.
  const [searchKeyword, setSearchKeyword] = useState('')

  // 임시 페이지 변경 함수
  const handlePageChange = (newPage: number) => {
    setCurrent(newPage)
  }
  // 임시 태그 변경 함수
  const onClickTag = (newName: string, isAdd: boolean = false) => {
    if (isAdd) {
      if (!testSelectArray.includes(newName) && testSelectArray.length < 5) {
        setTestSelectArray((prev) => [...prev, newName])
      }
    } else {
      if (testSelectArray.includes(newName)) {
        setTestSelectArray((prev) => prev.filter((el) => el !== newName))
      } else if (testSelectArray.length < 5) {
        setTestSelectArray((prev) => [...prev, newName])
      }
    }
  }
  // 임시 제거 함수
  const onClickDeleteTag = (tagName: string) => {
    if (testSelectArray.includes(tagName)) {
      setTestSelectArray((prev) => prev.filter((el) => el !== tagName))
    }
  }

  //임시 검색 함수
  //임시라서 간단하게만 담겨 있습니다.(실제 검색은 be에서 담당함)
  const onSearchTag = (tagName: string) => {
    setSearchKeyword(tagName)
    if (tagName === '') {
      setExdata(EXAMPLE_DATA)
    }
    const filtered = EXAMPLE_DATA.tags.filter((el) => el.name.includes(tagName))
    setExdata((prev) => ({
      ...prev,
      tags: filtered,
      page: 1,
      total_count: filtered.length,
    }))
  }
  return (
    <div className="mt-10">
      <TagSearch onSearch={onSearchTag} />
      {testSelectArray.length !== 0 && (
        <TagSelection
          tagArray={testSelectArray}
          onDeleteTag={onClickDeleteTag}
        />
      )}
      <TagList
        tags={exData.tags}
        // page={EXAMPLE_DATA.page}
        page={current} // 페이지 네이션 테스트
        page_size={exData.page_size}
        total_count={exData.total_count}
        onPageChange={handlePageChange}
        onSelectTag={onClickTag}
        selectArray={testSelectArray}
        keyword={searchKeyword}
      />
    </div>
  )
}

export default GwonTestPage

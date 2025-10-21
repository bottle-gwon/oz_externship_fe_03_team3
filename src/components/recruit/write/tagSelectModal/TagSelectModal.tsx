import Modal from '@/components/commonInGeneral/modal/Modal'
import TagSearch from './feat/TagSearch'
import TagSelection from './feat/TagSelection'
import TagList from './feat/TagList'
import { useState } from 'react'

interface TagSelectModal {
  isOn: boolean
  onClose: () => void

  tagArray: string[] // 기존에 선택 태그들
  setTagArray: React.Dispatch<React.SetStateAction<string[]>>
}

// Todo 임시 데이터 api 연동하면 지울것!
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

// 기존 선택 되어 있는 태그, 태그 수정만 내려 받고
// 요청은 태그 모달에서 직접함
const TagSelectModal = ({
  isOn,
  onClose,
  tagArray,
  setTagArray,
}: TagSelectModal) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [current, setCurrent] = useState(1) // 현재 페이지
  const [responseData, setResponseData] = useState(EXAMPLE_DATA) // Todo api 요청 받을때 useEffect 또는 tanstackQuery를 사용해서 입력 받을것

  const handlePageChange = (newPage: number) => {
    setCurrent(newPage)
  }
  // 임시 태그 변경 함수
  const onClickTag = (newName: string, isAdd: boolean = false) => {
    if (isAdd) {
      if (!tagArray.includes(newName) && tagArray.length < 5) {
        setTagArray((prev) => [...prev, newName])
      }
    } else {
      if (tagArray.includes(newName)) {
        setTagArray((prev) => prev.filter((el) => el !== newName))
      } else if (tagArray.length < 5) {
        setTagArray((prev) => [...prev, newName])
      }
    }
  }
  // 임시 제거 함수
  const onClickDeleteTag = (tagName: string) => {
    if (tagArray.includes(tagName)) {
      setTagArray((prev) => prev.filter((el) => el !== tagName))
    }
  }
  //임시 검색 함수
  //임시라서 간단하게만 담겨 있습니다.(실제 검색은 be에서 담당함) 차후에 api 요청으로 변경해야함
  const onSearchTag = (tagName: string) => {
    setSearchKeyword(tagName)
    if (tagName === '') {
      setResponseData(EXAMPLE_DATA)
    }
    const filtered = EXAMPLE_DATA.tags.filter((el) => el.name.includes(tagName))
    setResponseData((prev) => ({
      ...prev,
      tags: filtered,
      page: 1,
      total_count: filtered.length,
    }))
    setCurrent(1)
  }

  return (
    <Modal isOn={isOn} onClose={onClose}>
      <Modal.Header>헤더</Modal.Header>
      <Modal.Body>
        <TagSearch onSearch={onSearchTag} />
        {tagArray.length !== 0 && (
          <TagSelection tagArray={tagArray} onDeleteTag={onClickDeleteTag} />
        )}
        <TagList
          tags={responseData.tags}
          // page={EXAMPLE_DATA.page}
          page={current} // 페이지 네이션 테스트
          page_size={responseData.page_size}
          total_count={responseData.total_count}
          onPageChange={handlePageChange}
          onSelectTag={onClickTag}
          selectArray={tagArray}
          keyword={searchKeyword}
        />
      </Modal.Body>
      <Modal.Footer>이게 푸터</Modal.Footer>
    </Modal>
  )
}

export default TagSelectModal

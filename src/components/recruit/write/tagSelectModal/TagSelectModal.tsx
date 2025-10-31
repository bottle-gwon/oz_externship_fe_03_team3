import Modal from '@/components/commonInGeneral/modal/Modal'
import TagSearch from './feat/TagSearch'
import TagSelection from './feat/TagSelection'
import TagList from './feat/TagList'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Button from '@/components/commonInGeneral/button/Button'
import useStudyHubStore from '@/store/store'
import AddTagErrorModal from './guideModal/AddTagErrorModal'
// import { useSearchTag } from '@/hooks/tag/useTag'

interface TagSelectModal {
  isOn: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
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
const TagSelectModal = ({ isOn, onClose }: TagSelectModal) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [current, setCurrent] = useState(1) // 현재 페이지
  const [responseData, setResponseData] = useState(EXAMPLE_DATA) // Todo api 요청 받을때 useEffect 또는 tanstackQuery를 사용해서 입력 받을것
  const [isPending, setIsPending] = useState(false) //tanstackQuery의 isPending
  const [newSelectTagArray, setNewSelectTagArray] = useState<string[]>([])
  const [isErrorModalOn, setIsErrorModalOn] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  // 아래 주석은 api 연결시 사용 합니다.
  // const param = { keyword: searchKeyword, page: current }

  // isFetching은 페이지 네이팅 할때 사용
  // isPending은 데모용으로 사용중이라 추후 api 나오면 추가
  // data는 api 연결할때 responseData로 재정의
  // const {
  //   // data:responseData , isPending,
  //   isError,
  //   error,
  //   isFetching,
  // } = useSearchTag(param)

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const selectedTagArray = useStudyHubStore((state) => state.selectedTagArray)
  const setSelectedTagArray = useStudyHubStore(
    (state) => state.setSelectedTagArray
  )
  useEffect(() => {
    setNewSelectTagArray(selectedTagArray)
  }, [selectedTagArray])

  // 테스트용 로딩
  useEffect(() => {
    //타이머 함수 검색 될때 마다, 5초씩 체크
    setIsPending(true)
    timerRef.current = setTimeout(() => setIsPending(false), 1500)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [searchKeyword])

  const handlePageChange = (newPage: number) => {
    setCurrent(newPage)
  }

  const handleClose = () => {
    // 초기화 후 닫기
    setNewSelectTagArray(selectedTagArray)
    onClose(false)
  }

  const onClickAddTag = () => {
    setSelectedTagArray(newSelectTagArray)
    // 닫기
    onClose(false)
  }

  // 임시 태그 변경 함수
  // 새로운 태그 추가 부분은 서버로 요청 보내야해서 중복이라고 출력 되는 부분은 임시 로직입니다.
  const onClickTag = (newName: string, isAdd: boolean = false) => {
    if (isAdd) {
      if (
        !newSelectTagArray.includes(newName) &&
        newSelectTagArray.length < 5
      ) {
        setNewSelectTagArray([...newSelectTagArray, newName])
      } else {
        // 응답에서 중복 메시지를 받았다고 가정
        setIsErrorModalOn(true)
        setErrorMessage(newName)
      }
    } else {
      if (newSelectTagArray.includes(newName)) {
        setNewSelectTagArray(newSelectTagArray.filter((tag) => tag !== newName))
      } else if (newSelectTagArray.length < 5) {
        setNewSelectTagArray([...newSelectTagArray, newName])
      }
    }
  }
  // 임시 제거 함수
  const onClickDeleteTag = (tagName: string) => {
    if (newSelectTagArray.includes(tagName)) {
      setNewSelectTagArray(newSelectTagArray.filter((tag) => tag !== tagName))
    }
  }
  //임시 검색 함수
  //임시라서 간단하게만 담겨 있습니다.(실제 검색은 be에서 담당함) 차후에 api 요청으로 변경해야함
  const onSearchTag = useCallback((tagName: string) => {
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
  }, [])

  // // 임시 에러 처리
  // useEffect(() => {
  //   // 에러 발생
  //   if (isError && !isErrorModalOn) {
  //     setIsErrorModalOn(true)
  //     // 지금 가이드 모달을 사용중이라 제대로 뜨지 않을겁니다.
  //     setErrorMessage(
  //       '불러오는중에 에러가 발생' + error?.message || '알 수 없는 에러'
  //     )
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isError, error])

  return (
    <>
      <Modal isOn={isOn} onClose={handleClose} width="sm">
        <Modal.Header>
          <Vstack gap="xs">
            <h2 className="text-lg font-semibold">태그 선택</h2>
            <p className="text-sm text-gray-600">{`공고에 추가할 태그를 선택하세요 (${newSelectTagArray.length}/5)`}</p>
          </Vstack>
        </Modal.Header>
        <Modal.Body>
          <TagSearch onSearch={onSearchTag} />
          {newSelectTagArray.length !== 0 && (
            <TagSelection
              tagArray={newSelectTagArray}
              onDeleteTag={onClickDeleteTag}
            />
          )}
          <TagList
            responseData={responseData}
            page={current} // 페이지 네이션 테스트
            onPageChange={handlePageChange}
            onSelectTag={onClickTag}
            selectArray={newSelectTagArray}
            keyword={searchKeyword}
            isLoading={isPending}
            // isFetching={isFetching}
          />
        </Modal.Body>
        <Modal.Footer>
          <Hstack className="items-center justify-between">
            <p className="text-sm text-gray-600">{`${newSelectTagArray.length === 0 ? '선택된 태그가 없습니다.' : `${newSelectTagArray.length}개 태그 선택됨`}`}</p>
            <Hstack>
              <Button
                color="mono"
                size="sm"
                className="border border-gray-300 bg-white px-[18px]"
                onClick={handleClose} // 모달창 그냥 닫기 === 취소
              >
                취소
              </Button>
              <Button
                color="primary"
                size="sm"
                className="px-[25px]"
                onClick={onClickAddTag}
              >
                선택 완료
              </Button>
            </Hstack>
          </Hstack>
        </Modal.Footer>
      </Modal>
      <AddTagErrorModal
        isOn={isErrorModalOn}
        setIsOn={setIsErrorModalOn}
        tag={errorMessage}
      />
    </>
  )
}

export default TagSelectModal

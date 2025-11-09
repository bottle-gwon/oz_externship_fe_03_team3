import Modal from '@/components/commonInGeneral/modal/Modal'
import TagSearch from './feat/TagSearch'
import TagSelection from './feat/TagSelection'
import TagList from './feat/TagList'
import { lazy, useEffect, useRef, useState } from 'react'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Button from '@/components/commonInGeneral/button/Button'
import useStudyHubStore from '@/store/store'
import { useAddNewTag, useSearchTag } from '@/hooks/tag/useTag'
import { AxiosError } from 'axios'
import type { TagApiFail, TagApiSuccess } from '@/types'
import useTagStore from '@/store/tag/tagStore'

const ErrorModal = lazy(
  () => import('@/components/commonInGeneral/modal/errorModal/ErrorModal')
)
const AddNewTagModal = lazy(
  () =>
    import(
      '@/components/recruit/write/tagSelectModal/guideModal/AddNewTagModal'
    )
)

interface TagSelectModal {
  isOn: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

// Todo 임시 데이터 api 연동하면 지울것!
// const EXAMPLE_DATA = {
//   tags: [
//     { id: 1, name: 'Python' },
//     { id: 2, name: 'AI' },
//     { id: 3, name: '딥러닝' },
//     { id: 4, name: '밥' },
//     { id: 5, name: 'C언어' },
//   ],
//   page: 1,
//   page_size: 5,
//   total_count: 50,
// }

// 기존 선택 되어 있는 태그, 태그 수정만 내려 받고
// 요청은 태그 모달에서 직접함
const TagSelectModal = ({ isOn, onClose }: TagSelectModal) => {
  // const [responseData, setResponseData] = useState(EXAMPLE_DATA) // Todo api 요청 받을때 useEffect 또는 tanstackQuery를 사용해서 입력 받을것
  // const [isPending, setIsPending] = useState(false) //tanstackQuery의 isPending

  // 태그 추가 에러 모달
  const [isErrorModalOn, setIsErrorModalOn] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [errorTitle, setErrorTitle] = useState<string>('')

  // 태그 추가 결과 모달
  const [isNewTagModalOn, setIsNewTagModalOn] = useState(false)
  const [newTagModalResponse, setNewTagModalResponse] = useState<
    TagApiSuccess | TagApiFail
  >({ detail: '' })

  const selectedTagArray = useStudyHubStore((state) => state.selectedTagArray)
  const setSelectedTagArray = useStudyHubStore(
    (state) => state.setSelectedTagArray
  )

  const currentTagArray = useTagStore((state) => state.currentTagArray)
  const setCurrentTagArray = useTagStore((state) => state.setCurrentTagArray)

  // 검색 스토어
  const setTagSearchInput = useTagStore((state) => state.setTagSearchInput)
  const tagSearchKeyword = useTagStore((state) => state.tagSearchKeyword)

  const page = useTagStore((state) => state.page)
  const setTotalPage = useTagStore((state) => state.setTotalPage)

  // 신규태그 뮤테이트 저장
  const setAddTagMutation = useTagStore((state) => state.setAddTagMutation)
  const setTagListLoading = useTagStore((state) => state.setTagListLoading)

  // 검색 로딩, 페이지네이팅 로딩을 구분 하기 위해 생성
  // 어떤 값이 달라지는지 비교해서 로딩 구분
  const lastFetchParams = useRef({
    keyword: '',
    page: 1,
  })

  // 아래 주석은 api 연결시 사용 합니다.
  const param = { keyword: tagSearchKeyword, page: page }

  // isFetching은 페이지 네이팅 할때 사용
  // isPending은 데모용으로 사용중이라 추후 api 나오면 추가
  // data는 api 연결할때 responseData로 재정의
  const {
    data: responseData,
    isPending,
    isError,
    error,
    isFetching,
  } = useSearchTag(param)

  const {
    mutate: addTag,
    isError: isAddError,
    error: addError,
  } = useAddNewTag()

  // const timerRef = useRef<NodeJS.Timeout | null>(null)

  // 뮤테이트 함수 저장
  useEffect(() => {
    if (addTag) {
      setAddTagMutation(addTag)
    }

    return () => {
      setAddTagMutation(undefined)
    }
  }, [setAddTagMutation, addTag])

  useEffect(() => {
    setCurrentTagArray(selectedTagArray)
    return () => {
      setCurrentTagArray([])
    }
  }, [selectedTagArray, setCurrentTagArray])

  useEffect(() => {
    if (responseData) {
      lastFetchParams.current = {
        keyword: tagSearchKeyword,
        page: page,
      }
    }
  }, [responseData, tagSearchKeyword, page])

  useEffect(() => {
    if (responseData) {
      setTotalPage(Math.ceil(responseData.total_count / 5))
    }
  }, [responseData, setTotalPage])

  // 테스트용 로딩
  // useEffect(() => {
  //   //타이머 함수 검색 될때 마다, 5초씩 체크
  //   setIsPending(true)
  //   timerRef.current = setTimeout(() => setIsPending(false), 1500)

  //   return () => {
  //     if (timerRef.current) {
  //       clearTimeout(timerRef.current)
  //     }
  //   }
  // }, [searchKeyword])

  const handleClose = () => {
    // 초기화 후 닫기
    setCurrentTagArray(selectedTagArray)
    setTagSearchInput('')
    onClose(false)
  }

  const onClickAddTag = () => {
    setSelectedTagArray(currentTagArray)
    setTagSearchInput('')
    // 닫기
    onClose(false)
  }

  // 태그 검색, 페이지네이팅, 데이터 불러오기 오류
  useEffect(() => {
    // 에러 발생
    if (isError && !isErrorModalOn) {
      setIsErrorModalOn(true)

      setErrorTitle(error?.name || '알 수 없는 에러')
      setErrorMessage(
        '불러오는중에 에러가 발생' + error?.message || '알 수 없는 에러'
      )
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error])

  // 태그 추가 에러 처리
  useEffect(() => {
    if (isAddError && !isNewTagModalOn) {
      if (!(addError instanceof AxiosError && addError?.status === 409)) {
        setIsNewTagModalOn(true)
        setNewTagModalResponse({ detail: `알 수 없는 에러 ${addError}` })
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddError, addError])

  // 검색 로딩
  const isSearchLoading =
    isFetching && tagSearchKeyword !== lastFetchParams.current.keyword

  // 페이지 네이팅 로딩
  const isPaginatingLoading =
    isFetching &&
    page !== lastFetchParams.current.page &&
    tagSearchKeyword === lastFetchParams.current.keyword

  useEffect(() => {
    if (isPending) {
      setTagListLoading('pending')
    } else if (isSearchLoading) {
      setTagListLoading('searching')
    } else if (isPaginatingLoading) {
      setTagListLoading('paginating')
    } else {
      setTagListLoading('false')
    }
  }, [isPending, setTagListLoading, isSearchLoading, isPaginatingLoading])

  return (
    <>
      <Modal isOn={isOn} onClose={handleClose} width="sm">
        <Modal.Header>
          <Vstack gap="xs">
            <h2 className="text-lg font-semibold">태그 선택</h2>
            <p className="text-sm text-gray-600">{`공고에 추가할 태그를 선택하세요 (${currentTagArray.length}/5)`}</p>
          </Vstack>
        </Modal.Header>

        <Modal.Body>
          <TagSearch />
          {currentTagArray.length !== 0 && <TagSelection />}
          <TagList responseData={responseData} />
        </Modal.Body>

        <Modal.Footer>
          <Hstack className="items-center justify-between">
            <p className="text-sm text-gray-600">{`${currentTagArray.length === 0 ? '선택된 태그가 없습니다.' : `${currentTagArray.length}개 태그 선택됨`}`}</p>
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

      <AddNewTagModal
        isOn={isNewTagModalOn}
        setIsOn={setIsNewTagModalOn}
        response={newTagModalResponse}
      />

      <ErrorModal
        isOn={isErrorModalOn}
        setIsOn={setIsErrorModalOn}
        title={errorTitle}
        detail={errorMessage}
      />
    </>
  )
}

export default TagSelectModal

import type { LecturesResponseData } from '@/types'
import { textToLectureOrdering } from '@/utils/simpleMaps'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import api from '@/api/api'
import { makeUrlFromParams } from '@/utils/urls'
import useLectureStore from '@/store/lecture/lectureStore'

const queryEndpoint = '/lectures'

const useLecturesQuery = () => {
  const [nextUrlInKey, setNextUrlInKey] = useState<string | null>(null)
  const [nextUrlInReady, setNextUrlInReady] = useState<string | null>(null)

  const debounceValue = useLectureStore((state) => state.debounceValue)
  const selectedCategory = useLectureStore((state) => state.selectedCategory)
  const selectedOrderingInText = useLectureStore(
    (state) => state.selectedOrderingInText
  )
  const setLectureArray = useLectureStore((state) => state.setLectureArray)
  const appendLectureArray = useLectureStore(
    (state) => state.appendLectureArray
  )
  const setRequestNextPage = useLectureStore(
    (state) => state.setRequestNextPage
  )
  const [params, setParams] = useState<object | null>(null)
  const url = makeUrlFromParams(queryEndpoint, params ?? {})

  // const isEnabled = Boolean(params) && ()

  const { data, isPending, error } = useQuery({
    queryKey: [
      queryEndpoint,
      // NOTE: parmas 바로 넣으면 안 되는 이유.... 뭐지? 이렇게 하면 되긴 하나?
      // NOTE: 상태로 넣어야 effect function 내부의 순서 따를 수 있다
      params,
      nextUrlInKey, // NOTE: key는 쿼리 트리거에만 사용됨
    ],
    queryFn: async () => {
      const response = await api.get(nextUrlInReady ?? url) // NOTE: 실제 쿼리는 in ready를 사용함
      return response.data as LecturesResponseData
    },
    enabled: Boolean(params),
  })

  useEffect(() => {
    // NOTE: 새로 검색할 것이니 다음 url 삭제
    setNextUrlInReady(null)

    setParams({
      page_size: 12,
      search: debounceValue,
      category: selectedCategory,
      ordering: textToLectureOrdering[selectedOrderingInText],
    })
  }, [debounceValue, selectedCategory, selectedOrderingInText])

  useEffect(() => {
    if (!data) {
      return
    }

    if (data.previous) {
      appendLectureArray(data.results)
    } else {
      setLectureArray(data.results)
    }

    // NOTE: data.next가 https가 아닌 http를 줘서 엔드포인트만 골라냅니다
    const index = data.next?.indexOf('/lectures')
    const nextUrl = data.next && index !== -1 ? data.next.slice(index) : null

    // NOTE: lecture store에 nextUrlInKey 바꿀 수 있는 함수 저장
    // NOTE: 해당 함수 호출 -> nextUrlInKey 바뀜 -> queryKey 바뀜 -> 새로 쿼리 요
    const requestNextPage = () => {
      setNextUrlInKey(nextUrl)
    }
    setRequestNextPage(requestNextPage)
    setNextUrlInReady(nextUrl)
  }, [data, appendLectureArray, setLectureArray, setRequestNextPage])

  return {
    isPending,
    error,
  }
}

const useLectures = () => {
  const lecturesQueryReturns = useLecturesQuery()

  return { ...lecturesQueryReturns }
}

export default useLectures

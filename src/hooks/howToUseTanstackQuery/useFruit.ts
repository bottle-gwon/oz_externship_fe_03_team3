// NOTE: TanStack Query 관련 커스텀 후크를 만들 땐 파일을 꼭 최상위 엔드포인트 기준으로 만듭니다
// NOTE: /auth/... -> useAuth
// NOTE: /recruit/... -> useRecruit
// NOTE: 최상위 커스텀 후크(useRecruit) 안에서 다른 성격의 (useQuery, useMutation)의 후크들을 호출합니다
// NOTE: 최상위 커스텀 후크는 하위 커스텀 후크들의 리턴값을 스프레드로 다시 리턴합니다

import useStudyHubStore from '@/store/store'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import useSimpleMutation from '../useSimpleMutation'
import api from '@/api/api'

const queryEndpoint = '/fruit'

const useFruitQuery = () => {
  const setFruitArray = useStudyHubStore((state) => state.setFruitArray)

  const {
    data,
    error: errorFruit,
    isPending: isPendingFruit,
    // NOTE: 캐시에 저장할 타입을 명시합니다
    // NOTE: 여기서는 fruitArray의 타입을 적었습니다
  } = useQuery<string[]>({
    // NOTE: queryKey는 엔드포인트로 통일합니다
    queryKey: [queryEndpoint],
    queryFn: async () => {
      const response = await api.get(queryEndpoint)
      return response.data.fruits as string[]
    },
  })

  useEffect(() => {
    // NOTE: tanstack query v5부터 useQuery에선 onSuccess 등을 사용할 수 없습니다
    // NOTE: data의 초깃값은 null입니다
    if (!data) {
      return
    }

    // NOTE: 받은 캐시(data)는 store에 저장합니다.
    // NOTE: 데이터 흐름은 다음과 같습니다.
    // NOTE: cache -> store -> view(button) -> cache 조작
    // NOTE: api를 연결한 뒤에는 store를 조작하는 게 아니라 cache를 조작해서 이를 store에 반영해야 합니다
    setFruitArray(data)
  }, [data, setFruitArray])

  return { errorFruit, isPendingFruit }
}

const useFruitMutation = () => {
  const fruitPost = useSimpleMutation({
    queryEndpoint,
    mutationFnWithData: (data) => api.post('/fruit', data),
    // NOTE: previous는 이전에 저장된 캐시이며, 이는 이전 useQuery 응답으로 받은 data와 같습니다
    // NOTE: newOne은 업데이트해야 하는 lecture, recruit, recruitDetail 등의 객체입니다
    updateCacheForUi: (previous: string[], newOne: string) => [
      ...previous,
      newOne,
    ],
    // 아래는 선택사항입니다
    // 아무것도 설정하지 않으면 아래처럼 작동합니다
    // 성공 응답: 하는 것 없음
    // 오류 응답: 기존 캐시로 원상복구
    // 어쨌든 끝나면: queryEndpoint로 get -> 자료 갱신
    handleSuccess: () => {},
    handleError: (_error) => {},
  })

  // NOTE: 요청마다 커스텀 후크를 만듭니다
  const fruitPut = useSimpleMutation({
    queryEndpoint,
    mutationFnWithData: (data) => api.post('/fruit/5', data),
    updateCacheForUi: (previous: string[], newOne: string) =>
      previous.map((fruit, index) => (index === 5 ? newOne : fruit)),
  })

  return { fruitPost, fruitPut }
}

// NOTE: useFruitQuery와 useFruitMutation을 각각의 파일로 만들고 각각 따로 호출할 수도 있습니다
// NOTE: useMuataion을 사용해 캐시를 조작할 땐 해당 캐시를 받아올 수 있는 useFruitQuery가 해당 화면에 호출되어 있어야 합니다
//
// NOTE: LecturePage       ---- useLecturesQuery 호출 <----|
// NOTE: |- LectureContent ---- useLecturesMutation 호출---| 캐시 조작 요청
//
// NOTE: 이런 상황이라면 둘을 별개 파일로 나눠도 괜찮습니다
const useFruit = () => {
  const useFruitQueryReturns = useFruitQuery()
  const useFruitMutationReturns = useFruitMutation()

  return { ...useFruitQueryReturns, ...useFruitMutationReturns }
}

export default useFruit

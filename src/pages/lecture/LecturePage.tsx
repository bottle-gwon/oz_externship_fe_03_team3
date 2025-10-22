import { dummyLectureArray } from '@/components/lecture/dummyLectureArray'
import LectureContent from '@/components/lecture/LectureContent'
import LectureSkeleton from '@/components/lecture/LectureSkeleton'
import useStudyHubStore from '@/store/store'
import { sleep } from '@/utils/sleep'
import { useEffect } from 'react'

// TODO: api 연결하면서 삭제!
const dummyGetLectureApi = async () => {
  await sleep(1000)
  const state = useStudyHubStore.getState()
  const setLectureArray = state.setLectureArray
  setLectureArray(dummyLectureArray)
}

const LecturePage = () => {
  // TODO: api 연결하면 tanstack 이용해서 isPending 사용
  const isPending = false

  // TODO: api 연결하면 useQuery로 교체해야 함
  useEffect(() => {
    dummyGetLectureApi()
  }, [])

  if (isPending) {
    return <LectureSkeleton />
  }

  return <LectureContent />
}

export default LecturePage

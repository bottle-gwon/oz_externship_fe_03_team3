import useSimpleMutation from '../useSimpleMutation'
import type { Lecture } from '@/types'
import api from '@/api/api'

const postBookmark = (body: Lecture) => {
  const realBody = {
    lecture_uuid: body.uuid,
  }

  api.post(`/lectures/bookmarks`, realBody)
}

const useLecturesMutation = () => {
  const postBookmarkMutation = useSimpleMutation({
    queryEndpoint: '/lectures',
    mutationFnWithData: postBookmark,
    updateCacheForUi: (previous: Lecture[], newOne: Lecture) =>
      previous.map((lecture) =>
        lecture.uuid === newOne.uuid ? newOne : lecture
      ),
  })

  const deleteBookmarkMutation = useSimpleMutation({
    queryEndpoint: '/lectures',
    mutationFnWithData: (data: Lecture) =>
      api.delete(`/lectures/bookmarks/${data.uuid}`),
    updateCacheForUi: (previous: Lecture[], newOne: Lecture) =>
      previous.map((lecture) =>
        lecture.uuid === newOne.uuid ? newOne : lecture
      ),
  })

  return { postBookmarkMutation, deleteBookmarkMutation }
}

export default useLecturesMutation

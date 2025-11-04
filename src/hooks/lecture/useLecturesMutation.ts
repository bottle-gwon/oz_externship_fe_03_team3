import useSimpleMutation from '../useSimpleMutation'
import type { Lecture, LecturesResponseData } from '@/types'
import api from '@/api/api'
import type { InfiniteData } from '@tanstack/react-query'

const postBookmark = (body: Lecture) => {
  const realBody = {
    lecture_uuid: body.uuid,
  }
  api.post(`/lectures/bookmarks`, realBody)
}

const updatePagedLectureCache = (
  previous: InfiniteData<LecturesResponseData, unknown>,
  newOne: Lecture
) => ({
  ...previous,
  pages: previous.pages.map((page) => ({
    ...page,
    results: page.results.map((lecture) =>
      lecture.uuid === newOne.uuid ? newOne : lecture
    ),
  })),
})

const useLecturesMutation = () => {
  const postBookmarkMutation = useSimpleMutation({
    queryEndpoint: '/lectures',
    mutationFnWithData: postBookmark,
    updateCacheForUi: updatePagedLectureCache,
  })

  const deleteBookmarkMutation = useSimpleMutation({
    queryEndpoint: '/lectures',
    mutationFnWithData: (data: Lecture) =>
      api.delete(`/lectures/bookmarks/${data.uuid}`),
    updateCacheForUi: updatePagedLectureCache,
  })

  return { postBookmarkMutation, deleteBookmarkMutation }
}

export default useLecturesMutation

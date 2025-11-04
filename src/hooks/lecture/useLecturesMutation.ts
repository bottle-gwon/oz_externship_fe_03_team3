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
  // NOTE: pages를 제외한 캐시는 유지
  // NOTE: pages에서는 newOne을 가지고 있는 page를 찾기 위해 매핑
  ...previous,
  pages: previous.pages.map((page) => ({
    // NOTE: page에서 recruit, lecture 등을 담고 있지 않은 나머지는 유지
    // NOTE: results에서는 newOneq을 찾아서 대체
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

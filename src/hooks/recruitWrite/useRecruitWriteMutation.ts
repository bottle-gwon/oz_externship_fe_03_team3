import api from '@/api/api'
import useStudyHubStore from '@/store/store'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

const useRecruitWriteMutation = () => {
  const setModalKey = useStudyHubStore((state) => state.setModalKey)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const postRecruitWriteMutation = useMutation({
    mutationFn: (body: object) => api.post('/recruitments', body),
    onError: () => {
      // TODO: 아직 해당 모달 추가 못 함
      setModalKey('recruitWriteError')
    },
    onSuccess: (response: { data: { uuid: string } }) => {
      const id = response.data.uuid
      navigate(`/recruit/${id}`, { replace: true })
      queryClient.invalidateQueries({ queryKey: ['/recruitments'] })
      queryClient.invalidateQueries({ queryKey: ['/recruitments/mine'] })
    },
  })

  const patchRecruitWriteMutation = useMutation({
    mutationFn: ({ body, uuid }: { body: object; uuid: string }) =>
      api.patch(`/recruitments/${uuid}`, body),
    onError: () => {
      // TODO: 아직 해당 모달 추가 못 함
      setModalKey('recruitWriteError')
    },
    onSuccess: (response: { data: { uuid: string } }) => {
      const uuid = response.data.uuid
      navigate(`/recruit/${uuid}`, { replace: true })
      queryClient.invalidateQueries({ queryKey: ['/recruitments'] })
      queryClient.invalidateQueries({ queryKey: ['/recruitments/mine'] })
      queryClient.invalidateQueries({ queryKey: [`/recruitments/${uuid}`] })
    },
  })

  return { postRecruitWriteMutation, patchRecruitWriteMutation }
}

export default useRecruitWriteMutation

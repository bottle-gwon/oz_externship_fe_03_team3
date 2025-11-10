import api from '@/api/api'
import useStudyHubStore from '@/store/store'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

const useRecruitWriteMutation = () => {
  const setModalKey = useStudyHubStore((state) => state.setModalKey)
  const navigate = useNavigate()

  const postRecruitWriteMutation = useMutation({
    mutationFn: (body: FormData) => api.post('/recruitments', body),
    onError: () => {
      debugger
      setModalKey('recruitWriteError')
    },
    onSuccess: (response: { data: { id: number } }) => {
      debugger
      const id = response.data.id
      navigate(`/recruit/${id}`)
    },
  })

  const patchRecruitWriteMutation = useMutation({
    mutationFn: ({ body, id }: { body: FormData; id: number }) =>
      api.patch(`/recruitments/${id}`, body),
    onError: () => {
      debugger
      setModalKey('recruitWriteError')
    },
    onSuccess: (response: { data: { id: number } }) => {
      debugger
      const id = response.data.id
      navigate(`/recruit/${id}`)
    },
  })

  return { postRecruitWriteMutation, patchRecruitWriteMutation }
}

export default useRecruitWriteMutation

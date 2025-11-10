import api from '@/api/api'
import useStudyHubStore from '@/store/store'
import { useMutation } from '@tanstack/react-query'
import type { FieldValues } from 'react-hook-form'
import { useNavigate } from 'react-router'

const useRecruitWriteMutation = () => {
  const setModalKey = useStudyHubStore((state) => state.setModalKey)
  const navigate = useNavigate()

  const postRecruitWriteMutation = useMutation({
    mutationFn: (body: FieldValues) => api.post('/recruitments', body),
    onError: () => {
      debugger
      setModalKey('recruitWriteError')
    },
    onSuccess: (response: { data: { id: number } }) => {
      const id = response.data.id
      navigate(`/recruit/${id}`)
    },
  })
  const patchRecruitWriteMutation = useMutation({
    mutationFn: (body: FieldValues) => api.patch('/recruitments', body),
    onError: () => {
      debugger
      setModalKey('recruitWriteError')
    },
    onSuccess: (response: { data: { id: number } }) => {
      const id = response.data.id
      navigate(`/recruit/${id}`)
    },
  })

  return { postRecruitWriteMutation, patchRecruitWriteMutation }
}

export default useRecruitWriteMutation

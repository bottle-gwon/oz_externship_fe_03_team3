import api from '@/api/api'
import useStudyHubStore from '@/store/store'
import { useMutation } from '@tanstack/react-query'

const useApplyMutation = () => {
  const modalKeyArray = useStudyHubStore((state) => state.modalKeyArray)
  const setModalKeyArray = useStudyHubStore((state) => state.setModalKeyArray)

  const applyMutation = useMutation({
    mutationFn: ({ body, uuid }: { body: object; uuid: string }) =>
      api.post(`/recruitments/${uuid}/applications`, body),
    onError: () => setModalKeyArray([...modalKeyArray]),
    onSuccess: () => setModalKeyArray('applySuccess'),
  })

  return { applyMutation }
}

export default useApplyMutation

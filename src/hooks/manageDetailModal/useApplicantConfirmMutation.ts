import api from '@/api/api'
import useStudyHubStore from '@/store/store'
import { useMutation } from '@tanstack/react-query'

const useApplicantConfirmMutation = () => {
  const setModalKeyArray = useStudyHubStore((state) => state.setModalKeyArray)
  const approveApplicantMutation = useMutation({
    mutationFn: async (applicationId: number) => {
      const body = { status: 'APPROVED' }
      const response = await api.post(
        `/recruitments/applications/${applicationId}`,
        body
      )
      return response.data
    },
    onSuccess: () => {
      setModalKeyArray(['manage', 'manageDetail', 'resultApprove'])
    },
  })

  const rejectApplicantMutation = useMutation({
    mutationFn: async (applicationId: number) => {
      const body = { status: 'REJECTED' }
      const response = await api.post(
        `/recruitments/applications/${applicationId}`,
        body
      )
      return response.data
    },
    onSuccess: () => {
      setModalKeyArray(['manage', 'manageDetail', 'resultReject'])
    },
  })

  return { approveApplicantMutation, rejectApplicantMutation }
}

export default useApplicantConfirmMutation

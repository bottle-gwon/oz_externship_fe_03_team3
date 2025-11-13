import useStudyHubStore from '@/store/store'
import type { Applicant, Color } from '@/types'
import useApplicantConfirmMutation from './useApplicantConfirmMutation'

interface ButtonConfig {
  text: string
  color: Color
  onClick: () => void
}

interface ConfirmationConfig {
  title: string
  buttons: ButtonConfig[]
}

interface useManageDetailConfirmationProps {
  nickname: string
  applicant: Applicant
  recruitmentId: string
}

const useManageDetailConfirmation = ({
  nickname,
  applicant,
  recruitmentId,
}: useManageDetailConfirmationProps) => {
  const modalKeyArray = useStudyHubStore((state) => state.modalKeyArray)
  const setModalKeyArray = useStudyHubStore((state) => state.setModalKeyArray)
  const { approveApplicantMutation, rejectApplicantMutation } =
    useApplicantConfirmMutation(recruitmentId)

  // 승인 버튼 클릭
  const handleApproveClick = () => {
    approveApplicantMutation.mutate({
      data: applicant,
      newOne: {
        ...applicant,
        status: 'APPROVED',
      },
    })
  }

  // 거절 버튼 클릭
  const handleRejectClick = () => {
    rejectApplicantMutation.mutate({
      data: applicant,
      newOne: {
        ...applicant,
        status: 'REJECTED',
      },
    })
  }

  // 승인 확정
  const handleConfirmApprove = async () => {
    setModalKeyArray(['manage'])
  }

  // 거절 확정
  const handleConfirmReject = async () => {
    setModalKeyArray(['manage'])
  }

  const handleClose = () => {
    setModalKeyArray(['manage', 'manageDetail'])
  }

  const isPending =
    approveApplicantMutation.isPending || rejectApplicantMutation.isPending

  const confirmationConfig: Record<string, ConfirmationConfig> = {
    confirmApprove: {
      title: `${nickname}님을 승인하시겠습니까?`,
      buttons: [
        {
          text: '취소',
          color: 'mono',
          onClick: handleClose,
        },
        {
          text: '승인',
          color: 'success',
          onClick: handleApproveClick,
        },
      ],
    },
    confirmReject: {
      title: `${nickname}님을 거절하시겠습니까?`,
      buttons: [
        {
          text: '취소',
          color: 'mono',
          onClick: handleClose,
        },
        {
          text: '거절',
          color: 'danger',
          onClick: handleRejectClick,
        },
      ],
    },
    resultApprove: {
      title: '승인이 완료되었습니다',
      buttons: [
        {
          text: '확인',
          color: 'mono',
          onClick: handleConfirmApprove,
        },
      ],
    },
    resultReject: {
      title: '거절이 완료되었습니다',
      buttons: [
        {
          text: '확인',
          color: 'mono',
          onClick: handleConfirmReject,
        },
      ],
    },
  }

  const currentModalKey = modalKeyArray[modalKeyArray.length - 1]

  const currentConfig = confirmationConfig[currentModalKey]

  return { isPending, currentConfig, handleClose }
}

export default useManageDetailConfirmation

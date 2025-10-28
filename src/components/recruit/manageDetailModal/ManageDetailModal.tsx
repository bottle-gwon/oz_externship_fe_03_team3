import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import ProfileImage from '@/components/commonInProject/ProfileImage/ProfileImage'
import Tag from '@/components/commonInProject/tag/Tag'
import { experienceStyles, statusStyles, type ApplicantDetail } from '@/types'
import ApplicantDetailCard from './ApplicantDetailCard'
import ManageDetailModalButtons from './ManageDetailModalButtons'

interface ManageDetailModalProps {
  isOn: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
  applicant: ApplicantDetail
}

const ManageDetailModal = ({
  isOn,
  onClose,
  applicant,
}: ManageDetailModalProps) => {
  const statusStyle = statusStyles[applicant.status]
  const experienceStyle =
    experienceStyles[String(applicant.has_study_experience) as 'true' | 'false']

  const handleClose = () => {
    onClose(false)
  }

  return (
    <Modal isOn={isOn} onClose={handleClose} width="sm">
      <Modal.Header>
        <h2 className="text-lg font-semibold">지원자 상세 정보</h2>
      </Modal.Header>

      <Modal.Body className="overflow-auto">
        <Vstack gap="xl">
          <RoundBox isBordered={false} padding="lg" color="mono-dim">
            <Vstack>
              <p className="text-sm font-medium text-gray-700">지원자 정보</p>
              <Hstack gap="lg">
                <ProfileImage url={applicant.profile_image} size="xl" />
                <Vstack gap="none" className="justify-center">
                  <h3 className="text-lg font-semibold">
                    {applicant.nickname}
                  </h3>
                  <p className="text-gray-600">{applicant.gender}</p>
                </Vstack>
              </Hstack>
            </Vstack>
          </RoundBox>

          <RoundBox padding="lg" isBordered={false} color="mono-dim">
            <Hstack className="justify-between">
              <Vstack gap="xs" className="items-center justify-center">
                <p className="text-sm text-gray-600">지원 상태</p>
                <Tag color={statusStyle.style}>{statusStyle.content}</Tag>
              </Vstack>
              <Vstack gap="xs" className="items-end">
                <p className="text-sm text-gray-600">지원한 일시</p>
                <p className="text-sm font-medium">{applicant.created_at}</p>
              </Vstack>
            </Hstack>
          </RoundBox>

          <ApplicantDetailCard
            title="자기소개"
            content={applicant.introduction}
          />
          <ApplicantDetailCard
            title="지원 동기"
            content={applicant.motivation}
          />
          <ApplicantDetailCard title="스터디 목표" content={applicant.goal} />
          <ApplicantDetailCard
            title="가능한 시간대"
            content={applicant.available_times}
          />

          <Vstack>
            <h4 className="text-sm font-bold text-gray-700">스터디 경험</h4>
            <RoundBox padding="lg" isBordered={false} color="mono-dim">
              <Vstack className="items-start">
                <Tag color={experienceStyle.style}>
                  {experienceStyle.content}
                </Tag>
                <p className="text-gray-700">
                  {applicant.study_experience_detail}
                </p>
              </Vstack>
            </RoundBox>
          </Vstack>
        </Vstack>
      </Modal.Body>

      <Modal.Footer>
        {applicant.status === 'pending' && (
          <ManageDetailModalButtons onClose={handleClose} />
        )}
      </Modal.Footer>
    </Modal>
  )
}

export default ManageDetailModal

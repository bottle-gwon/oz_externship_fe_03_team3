import { GridContainer, Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'
import type { Applicant } from '@/types/_applicantInterface'
import ApplicantCard from '../applicantCard/ApplicantCard'
import { useState } from 'react'
import ManageDetailModal from '../manageDetailModal/ManageDetailModal'
import type { ApplicantDetail } from '@/types'
import { dummyApplicantDetail } from '@/testRoutes/testPages/hyejeong/dummy/dummyApplicantDetail'
import useStudyHubStore from '@/store/store'

interface ManageModal {
  isOn: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
  recruitContent: string
  applicantArray: Applicant[]
}

const ManageModal = ({
  isOn,
  onClose,
  recruitContent,
  applicantArray,
}: ManageModal) => {
  const [_selectedApplicantId, setSelectedApplicantId] = useState<
    number | null
  >(null) // 선택된 지원자 id, api 연결할때 사용

  const modalKeyArray = useStudyHubStore((state) => state.modalKeyArray)
  const setModalKeyArray = useStudyHubStore((state) => state.setModalKeyArray)
  const [applicantDetail, setApplicantDetail] =
    useState<ApplicantDetail | null>(null)

  const handleClose = () => {
    onClose(false)
  }

  const handleCardClick = (applicantId: number) => {
    setSelectedApplicantId(applicantId)
    setModalKeyArray([...modalKeyArray, 'manageDetail'])
    setApplicantDetail(dummyApplicantDetail)
  }

  const onDetailModalClose = () => {
    setModalKeyArray(['manage'])
    setSelectedApplicantId(null)
  }

  return (
    <>
      <Modal isOn={isOn} onClose={handleClose} width="md">
        <Modal.Header>
          <Vstack gap="xs">
            <h2 className="text-lg font-semibold">지원현황관리</h2>
            <p className="text-sm">{`${recruitContent} - 총 ${applicantArray.length}명이 지원했습니다`}</p>
          </Vstack>
        </Modal.Header>
        <Modal.Body className="overflow-auto">
          {applicantArray.length > 0 && (
            <GridContainer gap="lg" className="grid-cols-2">
              {applicantArray.map((applicant) => (
                <ApplicantCard
                  key={applicant.id}
                  applicant={applicant}
                  onClick={() => handleCardClick(applicant.id)}
                />
              ))}
            </GridContainer>
          )}
          {applicantArray.length <= 0 && (
            <Vstack gap="none" className="text-center text-gray-500">
              아직 지원자가 없습니다
            </Vstack>
          )}
        </Modal.Body>
      </Modal>

      {modalKeyArray.includes('manageDetail') && applicantDetail && (
        <ManageDetailModal
          isOn={modalKeyArray.includes('manageDetail')}
          onClose={onDetailModalClose}
          applicant={applicantDetail}
        />
      )}
    </>
  )
}

export default ManageModal

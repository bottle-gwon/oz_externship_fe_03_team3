import { GridContainer, Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'
import type { Applicant } from '@/types/_applicantInterface'
import ApplicantCard from '../applicantCard/ApplicantCard'
import { useState } from 'react'
import ApplyModal from '../detail/applyModal/ApplyModal'

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
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(
    null
  ) // 선택된 지원자

  const handleClose = () => {
    onClose(false)
  }

  const handleCardClick = (applicant: Applicant) => {
    setSelectedApplicant(applicant)
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
        <Modal.Body>
          {applicantArray.length > 0 && (
            <GridContainer gap="lg" className="grid-cols-2">
              {applicantArray.map((applicant) => (
                <ApplicantCard
                  key={applicant.id}
                  applicant={applicant}
                  onClick={() => handleCardClick}
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

      {selectedApplicant && <ApplyModal />}
    </>
  )
}

export default ManageModal

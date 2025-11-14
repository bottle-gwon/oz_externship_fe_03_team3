import { GridContainer, Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'
import ApplicantCard from '../applicantCard/ApplicantCard'
import { useEffect, useRef, useState } from 'react'
import ManageDetailModal from '../manageDetailModal/ManageDetailModal'
import useStudyHubStore from '@/store/store'
import useApplicantStore from '@/store/recruit/manageModal/applicantStore'
import useApplicantsQuery from '@/hooks/manageModal/useApplicantsQuery'
import type { Applicant, Recruit } from '@/types'
import useOneWayInfinityScroll from '@/hooks/useOneWayInfinityScroll'
import ApplicantListSkeleton from './skeleton/ApplicantListSkeleton'
import ApplicantTitleSkeleton from './skeleton/ApplicantTitleSkeleton'

interface ManageModal {
  isOn: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
  recruit: Recruit
}

const ManageModal = ({ isOn, onClose, recruit }: ManageModal) => {
  console.log(recruit)
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(
    null
  )
  const { isPending, count } = useApplicantsQuery(recruit.uuid, isOn)

  const applicantArray = useApplicantStore((state) => state.applicantArray)
  const requestNextPage = useApplicantStore((state) => state.requestNextPage)

  const modalKeyArray = useStudyHubStore((state) => state.modalKeyArray)
  const setModalKeyArray = useStudyHubStore((state) => state.setModalKeyArray)

  const bodyRef = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef<HTMLDivElement | null>(null)
  useOneWayInfinityScroll(targetRef, requestNextPage, {
    root: bodyRef.current,
  })

  const handleClose = () => {
    onClose(false)
  }

  const handleCardClick = (applicant: Applicant) => {
    setSelectedApplicant(applicant)
    setModalKeyArray([...modalKeyArray, 'manageDetail'])
  }
  const onDetailModalClose = () => {
    setModalKeyArray(['manage'])
    setSelectedApplicant(null)
  }

  return (
    <>
      <Modal isOn={isOn} onClose={handleClose} width="md">
        <Modal.Header>
          <Vstack gap="xs">
            <h2 className="text-lg font-semibold">지원현황관리</h2>
            {isPending && <ApplicantTitleSkeleton />}
            {!isPending && (
              <p className="text-sm">{`${recruit.title} - 총 ${count}명이 지원했습니다`}</p>
            )}
          </Vstack>
        </Modal.Header>

        <Modal.Body ref={bodyRef} className="overflow-auto">
          {isPending && <ApplicantListSkeleton />}
          {!isPending && applicantArray.length > 0 && (
            <GridContainer gap="lg" className="grid-cols-2">
              {applicantArray.map((applicant) => (
                <ApplicantCard
                  key={applicant.id}
                  applicant={applicant}
                  onClick={() => handleCardClick(applicant)}
                />
              ))}
            </GridContainer>
          )}

          {!isPending && applicantArray.length === 0 && (
            <Vstack gap="none" className="text-center text-gray-500">
              아직 지원자가 없습니다
            </Vstack>
          )}
          <div ref={targetRef} />
        </Modal.Body>
      </Modal>

      {modalKeyArray.includes('manageDetail') && selectedApplicant && (
        <ManageDetailModal
          isOn={modalKeyArray.includes('manageDetail')}
          onClose={onDetailModalClose}
          applicant={selectedApplicant}
          recruitmentId={recruit.uuid}
        />
      )}
    </>
  )
}

export default ManageModal

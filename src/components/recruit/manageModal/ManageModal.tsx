import { GridContainer, Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'
import ApplicantCard from '../applicantCard/ApplicantCard'
import { useState } from 'react'
import ManageDetailModal from '../manageDetailModal/ManageDetailModal'
import useStudyHubStore from '@/store/store'
import useApplicantStore from '@/store/recruit/manageModal/applicantStore'
import useApplicantsQuery from '@/hooks/manageModal/useApplicantsQuery'
import type { Recruit } from '@/types'
import { dummyRecruitArray } from '@/testRoutes/testPages/hyejeong/dummy/dummyRecruitList'
import useModalInfiniteScroll from '@/hooks/manageModal/useModalInfiniteScroll'

interface ManageModal {
  isOn: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
  recruit: Recruit
}

const ManageModal = ({ isOn, onClose, recruit }: ManageModal) => {
  // Todo: 임시로 지정, 연결할때 삭제
  recruit = dummyRecruitArray[0]

  const [selectedApplicantId, setSelectedApplicantId] = useState<number | null>(
    null
  )

  const {
    isPending,
    count,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    queryClient,
  } = useApplicantsQuery(recruit.id)
  const applicantArray = useApplicantStore((state) => state.applicantArray)
  const setApplicantArray = useApplicantStore(
    (state) => state.setApplicantArray
  )

  const modalKeyArray = useStudyHubStore((state) => state.modalKeyArray)
  const setModalKeyArray = useStudyHubStore((state) => state.setModalKeyArray)

  const { scrollRef, handleScroll } = useModalInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    offset: 100,
  })

  if (isPending) return <p>로딩중입니다.</p>

  const handleClose = () => {
    setApplicantArray([])
    queryClient.removeQueries({
      queryKey: [`/recruitments/${recruit.id}/applications`],
    })
    onClose(false)
  }
  const handleCardClick = (applicantId: number) => {
    setSelectedApplicantId(applicantId)
    setModalKeyArray([...modalKeyArray, 'manageDetail'])
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
            <p className="text-sm">{`${recruit.title} - 총 ${count}명이 지원했습니다`}</p>
          </Vstack>
        </Modal.Header>

        <Modal.Body
          ref={scrollRef}
          className="overflow-auto"
          onScroll={handleScroll}
        >
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

          {applicantArray.length === 0 && (
            <Vstack gap="none" className="text-center text-gray-500">
              아직 지원자가 없습니다
            </Vstack>
          )}
        </Modal.Body>
      </Modal>

      {modalKeyArray.includes('manageDetail') && selectedApplicantId && (
        <ManageDetailModal
          isOn={modalKeyArray.includes('manageDetail')}
          onClose={onDetailModalClose}
          applicantId={selectedApplicantId}
        />
      )}
    </>
  )
}

export default ManageModal

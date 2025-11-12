import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'

import RecruitSummaryCard from '@/components/recruit/manage/RecruitSummaryCard'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import SubHeader from '@/components/commonInProject/SubHeader/SubHeader'
import SubHeaderTitleSection from '@/components/commonInProject/SubHeader/_SubHeaderTtileSectoin'
import Button from '@/components/commonInGeneral/button/Button'
import SubHeaderButtonSection from '@/components/commonInProject/SubHeader/_SubHeaderButtonSection'
import { useNavigate } from 'react-router'
import useOneWayInfinityScroll from '@/hooks/useOneWayInfinityScroll'
import useRecruitManageStore from '@/store/recruit/manage/recruitManageStore'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

import RecruitManageOrderingSelect from './_RecruitManageOrderingSelect'
import RecruitManageStatusSelect from './_RecruitManageStatusSelect'
import { useRef, useState } from 'react'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal' // ★

const RecruitManageContent = () => {
  const navigate = useNavigate()
  const handleClick = (url: string) => navigate(url)

  const recruitManageArray = useRecruitManageStore(
    (state) => state.recruitManageArray
  )
  const requestNextPage = useRecruitManageStore(
    (state) => state.requestNextPage
  )

  const [deletedTitle, setDeletedTitle] = useState('')
  const [deleteSuccessOpen, setDeleteSuccessOpen] = useState(false)
  const [deleteErrorOpen, setDeleteErrorOpen] = useState(false)

  const count = useRecruitManageStore((state) => state.count)
  const selectedStatusInText = useRecruitManageStore(
    (state) => state.selectedStatusInText
  )

  const listCount =
    selectedStatusInText === '전체'
      ? (count.total ?? 0)
      : selectedStatusInText === '모집중'
        ? (count.open ?? 0)
        : (count.closed ?? 0)

  const loaderRef = useRef<HTMLDivElement | null>(null)
  useOneWayInfinityScroll(loaderRef, requestNextPage)

  return (
    <Container isPadded>
      <Vstack gap="xxl">
        <SubHeader isBackButtonVisible>
          <SubHeaderTitleSection>
            <SubHeader.Title>공고 관리</SubHeader.Title>
            <SubHeader.Subtitle>
              내가 등록한 스터디 구인공고를 관리하세요
            </SubHeader.Subtitle>
          </SubHeaderTitleSection>
          <SubHeaderButtonSection>
            <Button
              color="primary"
              variant="contained"
              size="lg"
              onClick={() => handleClick('/recruit/write')}
            >
              + 새 공고 작성하기
            </Button>
          </SubHeaderButtonSection>
        </SubHeader>

        <RecruitSummaryCard count={count} />

        <RoundBox
          isShadowed={false}
          color="mono-bright"
          padding="xl"
          radius="md"
        >
          <Hstack gap="none" className="gap-9">
            <RecruitManageStatusSelect />
            <RecruitManageOrderingSelect />
          </Hstack>
        </RoundBox>

        <Vstack gap="none">
          <h1 className="mb-oz-md">내 공고 목록 ({listCount})</h1>
          {recruitManageArray.map((recruit) => (
            <RecruitCard
              isMine
              key={recruit.uuid}
              recruit={recruit}
              onDeleteSuccess={(t) => {
                setDeletedTitle(t)
                setDeleteSuccessOpen(true)
              }}
              onDeleteError={(t) => {
                setDeletedTitle(t)
                setDeleteErrorOpen(true)
              }}
            />
          ))}

          <div ref={loaderRef} className="h-0.5 w-full shrink-0"></div>
        </Vstack>

        <ConfirmationModal
          isOn={deleteSuccessOpen}
          onClose={() => setDeleteSuccessOpen(false)}
        >
          <ConfirmationModal.Title>
            {`'${deletedTitle}'의 삭제가 완료되었습니다.`}
          </ConfirmationModal.Title>
          <ConfirmationModal.ButtonSection>
            <Button onClick={() => setDeleteSuccessOpen(false)}>확인</Button>
          </ConfirmationModal.ButtonSection>
        </ConfirmationModal>

        <ConfirmationModal
          isOn={deleteErrorOpen}
          onClose={() => setDeleteErrorOpen(false)}
        >
          <ConfirmationModal.Title>
            {`'${deletedTitle}'의 삭제가 실패하였습니다.`}
          </ConfirmationModal.Title>
          <ConfirmationModal.Content>
            <p className="text-sm">
              오류가 발생했습니다. 잠시 후 다시 시도하세요. 해당 오류가 반복될
              경우 관리자에게 문의해주세요
            </p>
          </ConfirmationModal.Content>
          <ConfirmationModal.ButtonSection>
            <Button onClick={() => setDeleteErrorOpen(false)}>확인</Button>
          </ConfirmationModal.ButtonSection>
        </ConfirmationModal>
      </Vstack>
    </Container>
  )
}

export default RecruitManageContent

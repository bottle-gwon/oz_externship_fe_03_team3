import Button from '@/components/commonInGeneral/button/Button'
import {
  GridContainer,
  Hstack,
  Vstack,
} from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import SubHeader from '@/components/commonInProject/SubHeader/SubHeader'
import Tag from '@/components/commonInProject/tag/Tag'
import TitledRoundBox from '@/components/commonInProject/TitledRoundBox/TitledRoundBox'
import type { Recruit, RecruitDetail } from '@/types'
import { ScrollText, Send } from 'lucide-react'
import RDInfoRow from './_RDInfoRow'
import RWLectureCard from './_RDLectureCard'
import MDEditor from '@uiw/react-md-editor'
import RDAttachmentCard from './_RDAttachmentCard'
import useStudyHubStore from '@/store/store'
import ApplicationModalPage from '@/pages/recruit/ApplicationModalPage'
import RDTitle from './_RDTitle'
import RDBookmarkButton from './_RDBookmarkButton'
import RDShareButton from './_RDShareButton'
import RDConfirmClipboardModalMany from './_RDConfirmClipboardModal'
import ManageModal from '../manageModal/ManageModal'
import LoginRequiredModal from '@/components/commonInProject/LoginRequiredModal/LoginRequiredModal'

const RDConditionalButton = ({ isMine }: { isMine: boolean }) => {
  const setModalKey = useStudyHubStore((state) => state.setModalKey)
  const appendModalKeyToArray = useStudyHubStore(
    (state) => state.appendModalKeyToArray
  )
  const accessToken = useStudyHubStore((state) => state.accessToken)

  const handleApplyClick = () => {
    if (!accessToken) {
      setModalKey('loginRequired')
      return
    }
    appendModalKeyToArray('apply')
  }

  if (isMine) {
    return (
      <Button
        color="blue"
        variant="contained"
        size="lg"
        onClick={() => setModalKey('manage')}
      >
        <ScrollText size={16} />
        지원 내역
      </Button>
    )
  }

  return (
    <Button
      color="primary"
      variant="contained"
      size="lg"
      onClick={handleApplyClick}
    >
      <Send size={16} />
      지원하기
    </Button>
  )
}

const RecruitDetailContent = ({
  recruitDetail,
  isMine = false,
}: {
  recruitDetail: RecruitDetail
  isMine?: boolean
}) => {
  const modalKey = useStudyHubStore((state) => state.modalKey)
  const setModalKey = useStudyHubStore((state) => state.setModalKey)
  const simplifiedRecruit = {
    uuid: recruitDetail.uuid,
    title: recruitDetail.title,
  } as Recruit

  return (
    <>
      <Container width="md" className="py-oz-xxl">
        <Vstack gap="xxl">
          <SubHeader isBackButtonVisible />

          <RoundBox padding="xxl">
            <Vstack gap="lg">
              <Hstack className="justify-between">
                <RDTitle recruitDetail={recruitDetail} />

                <Hstack className="shrink-0">
                  <RDShareButton />
                  <RDBookmarkButton recruitDetail={recruitDetail} />
                  <RDConditionalButton isMine={isMine} />
                </Hstack>
              </Hstack>

              <Hstack>
                {recruitDetail.tags.map((tag) => (
                  <Tag key={tag.id}>{tag.name}</Tag>
                ))}
              </Hstack>

              <RDInfoRow recruitDetail={recruitDetail} />
            </Vstack>
          </RoundBox>

          <TitledRoundBox>
            <TitledRoundBox.Title>공고 내용</TitledRoundBox.Title>
            <MDEditor.Markdown source={recruitDetail.content} />
          </TitledRoundBox>

          <TitledRoundBox>
            <TitledRoundBox.Title>스터디 강의 목록</TitledRoundBox.Title>
            <GridContainer gap="xl">
              {recruitDetail.lectures.map((lecture) => (
                <RWLectureCard
                  key={`${lecture.name}__${lecture.instructor}`}
                  lecture={lecture}
                />
              ))}
            </GridContainer>
          </TitledRoundBox>

          <TitledRoundBox>
            <TitledRoundBox.Title>첨부 파일</TitledRoundBox.Title>
            {recruitDetail.attachments.map((attachment) => (
              <RDAttachmentCard key={attachment.id} attachment={attachment} />
            ))}
          </TitledRoundBox>

          <RoundBox padding="xl">
            <Hstack>
              <RDBookmarkButton recruitDetail={recruitDetail} isWide />
              <RDShareButton isWide />
              <div className="grow" />
              <RDConditionalButton isMine={isMine} />
            </Hstack>
          </RoundBox>
        </Vstack>
      </Container>

      <ApplicationModalPage recruitDetail={recruitDetail} />

      <ManageModal
        isOn={modalKey === 'manage'}
        onClose={() => setModalKey(null)}
        recruit={simplifiedRecruit}
      />
      <RDConfirmClipboardModalMany />

      <LoginRequiredModal />
    </>
  )
}

export default RecruitDetailContent

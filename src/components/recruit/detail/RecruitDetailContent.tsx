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
import type { RecruitDetail } from '@/types'
import {
  Bookmark,
  Calendar,
  Eye,
  ScrollText,
  Send,
  Share2,
  UserRound,
} from 'lucide-react'
import RDInfoRow from './_RDInfoRow'
import RWLectureCard from './_RDLectureCard'
import MDEditor from '@uiw/react-md-editor'
import RDAttachmentCard from './_RDAttachmentCard'
import { useNavigate } from 'react-router'
import useStudyHubStore from '@/store/store'
import ApplicationModalPage from '@/pages/recruit/ApplicationModalPage'

const RDConditionalButton = ({ isMine }: { isMine: boolean }) => {
  const navigate = useNavigate()
  const setModalKey = useStudyHubStore((state) => state.setModalKey)

  if (isMine) {
    return (
      <Button
        color="blue"
        variant="contained"
        size="lg"
        onClick={() => navigate('/recruit/manage')}
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
      onClick={() => setModalKey('apply')}
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
  return (
    <>
      <Container width="md" className="py-oz-xxl">
        <Vstack gap="xxl">
          <SubHeader isBackButtonVisible />

          <RoundBox padding="xxl">
            <Vstack gap="lg">
              <Hstack>
                <Vstack>
                  <h1 className="text-3xl font-bold">{recruitDetail.title}</h1>
                  <Hstack className="flex-wrap">
                    <Hstack>
                      <UserRound />
                      작성자: {recruitDetail.author_nickname}
                    </Hstack>
                    <Hstack>
                      <Calendar />
                      등록일: {recruitDetail.created_at}
                    </Hstack>
                    <Hstack>
                      <Eye />
                      조회: {recruitDetail.views}
                    </Hstack>
                    <Hstack>
                      <Bookmark />
                      북마크: {recruitDetail.bookmark_count}
                    </Hstack>
                  </Hstack>
                </Vstack>

                <Hstack className="shrink-0">
                  <Button variant="outlined" size="lg" shape="square">
                    <Share2 />
                  </Button>
                  <Button
                    variant={
                      recruitDetail.is_bookmarked ? 'contained' : 'outlined'
                    }
                    size="lg"
                    shape="square"
                    color={recruitDetail.is_bookmarked ? 'blue' : 'mono'}
                  >
                    <Bookmark />
                  </Button>
                  <RDConditionalButton isMine={isMine} />
                </Hstack>
              </Hstack>

              <Hstack>
                {recruitDetail.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
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
              <Button variant="outlined" size="lg">
                <Bookmark size={16} />
                북마크
              </Button>
              <Button variant="outlined" size="lg">
                <Share2 size={16} />
                공유하기
              </Button>
              <div className="grow" />
              <RDConditionalButton isMine={isMine} />
            </Hstack>
          </RoundBox>
        </Vstack>
      </Container>
      <ApplicationModalPage />
    </>
  )
}

export default RecruitDetailContent

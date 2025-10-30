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
import { Bookmark, Calendar, Eye, Share, UserRound } from 'lucide-react'
import RDInfoRow from './_RDInfoRow'
import RWLectureCard from './_RDLectureCard'
import MDEditor from '@uiw/react-md-editor'

const RecruitDetailContent = ({
  recruitDetail,
}: {
  recruitDetail: RecruitDetail
}) => {
  return (
    <Container width="md">
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
                    작성자: {recruitDetail.author_name}
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
                  <Share />
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
                <Button color="blue" size="lg">
                  공통 컴포넌트로 교체해야
                </Button>
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
          <GridContainer>
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
        </TitledRoundBox>

        <RoundBox padding="xl"></RoundBox>
      </Vstack>
    </Container>
  )
}

export default RecruitDetailContent

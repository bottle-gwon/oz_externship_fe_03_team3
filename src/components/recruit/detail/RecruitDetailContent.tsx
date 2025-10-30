import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import SubHeader from '@/components/commonInProject/SubHeader/SubHeader'
import Tag from '@/components/commonInProject/tag/Tag'
import TitledRoundBox from '@/components/commonInProject/TitledRoundBox/TitledRoundBox'
import type { RecruitDetail } from '@/types'
import { Bookmark, Calendar, Eye, Share, UserRound } from 'lucide-react'
import RDInfoRow from './_RDInfoRow'

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
          <Vstack>
            <Hstack>
              <Vstack className="grow">
                <h1>{recruitDetail.title}</h1>
                <Hstack>
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
              <Button variant="outlined">
                <Share />
              </Button>
              <Button variant="outlined">
                <Bookmark />
              </Button>
              <Button color="blue">공통 컴포넌트로 교체해야</Button>
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
        </TitledRoundBox>

        <TitledRoundBox>
          <TitledRoundBox.Title>스터디 강의 목록</TitledRoundBox.Title>
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

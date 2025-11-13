import { Vstack, Hstack } from '@/components/commonInGeneral/layout'
import type { RecruitDetail } from '@/types'
import { UserRound, Calendar, Eye, Bookmark } from 'lucide-react'

const RDTitle = ({ recruitDetail }: { recruitDetail: RecruitDetail }) => {
  return (
    <Vstack>
      <h1 className="text-3xl font-bold">{recruitDetail.title}</h1>

      <Hstack className="flex-wrap">
        <Hstack>
          <UserRound />
          작성자: {recruitDetail.author}
        </Hstack>
        <Hstack>
          <Calendar />
          등록일: {recruitDetail.created_at}
        </Hstack>
        <Hstack>
          <Eye />
          조회: {recruitDetail.view_count}
        </Hstack>
        <Hstack>
          <Bookmark />
          북마크: {recruitDetail.bookmark_count}
        </Hstack>
      </Hstack>
    </Vstack>
  )
}

export default RDTitle

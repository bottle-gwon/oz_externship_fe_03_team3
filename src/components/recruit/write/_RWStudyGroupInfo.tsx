import Divider from '@/components/commonInGeneral/divider/Divider'
import { Hstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { LectureInStudyGroup, StudyGroup } from '@/types'

const LectureLine = ({ lecture }: { lecture: LectureInStudyGroup }) => {
  const price = lecture.discounted_price ?? lecture.original_price
  return (
    <Hstack className="justify-between">
      <p>{lecture.title}</p>
      <p>{price.toLocaleString()}원</p>
    </Hstack>
  )
}

const RWStudyGroupInfo = ({ studyGroup }: { studyGroup: StudyGroup }) => {
  const totalCost = studyGroup.lectures.reduce((acc, lecture) => {
    const price = lecture.discounted_price ?? lecture.original_price
    acc += price
    return acc
  }, 0)

  return (
    <RoundBox color="primary" padding="lg" className="text-sm">
      <h4 className="pb-oz-sm font-medium">선택된 그룹의 강의 정보</h4>
      {studyGroup.lectures.map((lecture) => (
        <LectureLine key={lecture.uuid} lecture={lecture} />
      ))}
      <Divider color="primary" className="my-oz-xs" />
      <Hstack className="justify-between font-medium">
        <p>총 강의 비용</p>
        <p>{totalCost.toLocaleString()}원</p>
      </Hstack>
    </RoundBox>
  )
}

export default RWStudyGroupInfo

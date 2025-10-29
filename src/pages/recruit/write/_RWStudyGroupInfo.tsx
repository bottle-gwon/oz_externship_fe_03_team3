import Divider from '@/components/commonInGeneral/divider/Divider'
import { Hstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { LectureInStudyGroup, StudyGroup } from '@/types'

const LectureLine = ({ lecture }: { lecture: LectureInStudyGroup }) => {
  return (
    <Hstack className="justify-between">
      <p>{lecture.title}</p>
      <p>{lecture.price}</p>
    </Hstack>
  )
}

const RWStudyGroupInfo = ({ studyGroup }: { studyGroup: StudyGroup }) => {
  const totalCost = studyGroup.lectures.reduce((acc, lecture) => {
    acc += lecture.price
    return acc
  }, 0)

  return (
    <RoundBox color="primary" padding="lg">
      <h4>{studyGroup.name}의 강의</h4>
      {studyGroup.lectures.map((lecture) => (
        <LectureLine key={lecture.id} lecture={lecture} />
      ))}
      <Divider />
      <Hstack className="justify-between">
        <p>총 강의 비용</p>
        <p>{totalCost}원</p>
      </Hstack>
    </RoundBox>
  )
}

export default RWStudyGroupInfo

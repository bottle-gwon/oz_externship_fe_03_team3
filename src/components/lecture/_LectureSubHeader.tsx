import SubHeaderTitleSection from '../commonInProject/SubHeader/_SubHeaderTtileSectoin'
import SubHeader from '../commonInProject/SubHeader/SubHeader'

const LectureSubHeader = () => {
  return (
    <SubHeader isBackButtonVisible={false}>
      <SubHeaderTitleSection>
        <SubHeader.Title>IT 강의 목록</SubHeader.Title>
        <SubHeader.Subtitle>
          전문 강사들의 고품질 IT 강의를 만나보세요
        </SubHeader.Subtitle>
      </SubHeaderTitleSection>
    </SubHeader>
  )
}

export default LectureSubHeader

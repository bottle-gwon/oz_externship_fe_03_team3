import SubHeaderTitleSection from '@/components/commonInProject/SubHeader/_SubHeaderTtileSectoin'
import SubHeader from '@/components/commonInProject/SubHeader/SubHeader'

const RWSubHeader = ({ isEditing }: { isEditing: boolean }) => {
  const title = `스터디 구인 공고 ${isEditing ? '수정' : '작성'}`
  const subtitle = `스터디 그룹의 새로운 멤버를 모집하는 공고를 ${isEditing ? '수정' : '작성'}해보세요`

  return (
    <SubHeader isBackButtonVisible>
      <SubHeaderTitleSection>
        <SubHeader.Title>{title}</SubHeader.Title>
        <SubHeader.Subtitle>{subtitle}</SubHeader.Subtitle>
      </SubHeaderTitleSection>
    </SubHeader>
  )
}

export default RWSubHeader

import SubHeader from './SubHeader'
import SubHeaderTitleSection from '@/components/commonInProject/SubHeader/_SubHeaderTtileSectoin'
import Button from '@/components/commonInGeneral/button/Button'
import SubHeaderButtonSection from './_SubHeaderButtonSection'
import ScrollText from '../../../assets/scroll-text.svg'
import { useNavigate } from 'react-router'
import { Hstack } from '@/components/commonInGeneral/layout'

const HowToUseSubHeader = () => {
  const navigate = useNavigate()
  const handleClick = (url: string) => navigate(url)

  return (
    <SubHeader>
      <Hstack gap="none" className="items-center">
        <SubHeader.BackButton isBackButtonVisible={true} />
        <SubHeaderTitleSection>
          <SubHeader.Title>스터디 구인 공고</SubHeader.Title>
          <SubHeader.Subtitle>
            새로운 스터디 멤버를 찾거나 관심있는 스터디에 참여해보세요
          </SubHeader.Subtitle>
        </SubHeaderTitleSection>
      </Hstack>
      <SubHeaderButtonSection>
        <Button
          color="primary"
          variant="outlined"
          size="lg"
          onClick={() => handleClick('/recruit/manager')}
        >
          <img src={ScrollText} />
          공고 관리
        </Button>
        <Button color="primary" variant="contained" size="lg" className="ml-3">
          + 공고 작성하기
        </Button>
      </SubHeaderButtonSection>
    </SubHeader>
  )
}

export default HowToUseSubHeader

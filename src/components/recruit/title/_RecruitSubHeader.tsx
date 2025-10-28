import Button from '@/components/commonInGeneral/button/Button'
import SubHeaderButtonSection from '@/components/commonInProject/SubHeader/_SubHeaderButtonSection'
import SubHeaderTitleSection from '@/components/commonInProject/SubHeader/_SubHeaderTtileSectoin'
import SubHeader from '@/components/commonInProject/SubHeader/SubHeader'
import { LogIn } from 'lucide-react'
import { useNavigate } from 'react-router'
import ScrollText from '../../../assets/scroll-text.svg'

interface RecruitSubHeaderProps {
  isLoggedIn: boolean
}

const RecruitSubHeader = ({ isLoggedIn }: RecruitSubHeaderProps) => {
  const navigate = useNavigate()
  const handleClick = (url: string) => navigate(url)

  return (
    <SubHeader isBackButtonVisible={false}>
      <SubHeaderTitleSection>
        <SubHeader.Title>스터디 구인 공고</SubHeader.Title>
        <SubHeader.Subtitle>
          새로운 스터디 멤버를 찾거나 관심있는 스터디에 참여해보세요
        </SubHeader.Subtitle>
      </SubHeaderTitleSection>
      <SubHeaderButtonSection>
        {isLoggedIn && (
          <>
            <Button
              color="primary"
              variant="outlined"
              size="lg"
              onClick={() => handleClick('/recruit/manager')}
            >
              <img src={ScrollText} />
              공고 관리
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="lg"
              onClick={() => handleClick('/recruit/write')}
            >
              + 공고 작성하기
            </Button>
          </>
        )}
        {!isLoggedIn && (
          <Button
            color="primary"
            variant="contained"
            size="lg"
            onClick={() => handleClick('/login')}
          >
            <LogIn className="mr-oz-sm" />
            로그인 후 공고 작성
          </Button>
        )}
      </SubHeaderButtonSection>
    </SubHeader>
  )
}

export default RecruitSubHeader

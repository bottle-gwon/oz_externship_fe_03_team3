import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import Logo from '@/assets/logo.svg'

const Header = () => {
  return (
    <div className="border border-b-gray-200 bg-white">
      <Container width="lg" className="px-oz-xxl py-oz-sm">
        <Hstack>
          <div className="grow">
            <img src={Logo} />
          </div>
          <Button variant="ghost">강의 목록</Button>
          <Button variant="ghost">스터디 그룹</Button>
          <Button variant="ghost">구인 공고</Button>
          <Button variant="ghost">로그인</Button>
          <Button color="primary">회원가입</Button>
        </Hstack>
      </Container>
    </div>
  )
}

export default Header

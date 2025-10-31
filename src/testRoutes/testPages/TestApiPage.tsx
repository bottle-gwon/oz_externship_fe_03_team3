import api from '@/api/api'
import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import TitledRoundBox from '@/components/commonInProject/TitledRoundBox/TitledRoundBox'
import useStudyHubStore from '@/store/store'

// NOTE: 로그인 로그아웃을 하면 스토어에 액세스 토큰이 실제로 저장되고 삭제됩니다
const login = async () => {
  const response = await api.post('/auth/login', {
    email: import.meta.env.VITE_LOGIN_ID,
    password: import.meta.env.VITE_LOGIN_PASSWORD,
  })

  const accessToken = response.data.data.access
  const setAccessToken = useStudyHubStore.getState().setAccessToken
  setAccessToken(accessToken)
}

const logout = () => {
  const setAccessToken = useStudyHubStore.getState().setAccessToken
  setAccessToken(null)
}

const getLectures = () => api.get('/lectures/')

const getNotifications = () => api.get('/notifications/')

const TestApiPage = () => {
  return (
    <Container width="md" isPadded>
      <RoundBox>
        <Vstack gap="xxl">
          <p>개발자 도구의 네트워크 탭을 확인해주세요</p>
          <TitledRoundBox>
            <TitledRoundBox.Title>Auth</TitledRoundBox.Title>
            <p>
              실제로 스토어에 액세스 토큰이 저장됩니다.
              <br />
              이는 로컬 스토리지에 저장되니 주소창에 새 주소를 입력해도
              유지됩니다
            </p>
            <Button onClick={login}>
              로그인하고 스토어에 액세스 토큰 저장
            </Button>
            <Button onClick={logout}>
              로그아웃하여 스토어에서 액세스 토큰 삭제
            </Button>
          </TitledRoundBox>

          <TitledRoundBox>
            <TitledRoundBox.Title>Lectures</TitledRoundBox.Title>
            <Button onClick={getLectures}>GET /lectures/</Button>
          </TitledRoundBox>

          <TitledRoundBox>
            <TitledRoundBox.Title>Notification</TitledRoundBox.Title>
            <Button onClick={getNotifications}>GET /notifications/</Button>
          </TitledRoundBox>
        </Vstack>
      </RoundBox>
    </Container>
  )
}

export default TestApiPage

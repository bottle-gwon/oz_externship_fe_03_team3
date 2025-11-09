import Button from '@/components/commonInGeneral/button/Button'
import { useNavigate } from 'react-router'

const CommonButtonMany = () => {
  const navigate = useNavigate()

  const navigateToLecture = () => navigate('/lecture')
  const navigateToRecruit = () => navigate('/recruit')
  // TODO: 스터디 URL 받으면 교체해야 함
  const redirectToStudy = () =>
    (window.location.href = import.meta.env.VITE_STUDY_PAGE_URL)

  return (
    <>
      <Button variant="ghost" size="lg" onClick={navigateToLecture}>
        강의 목록
      </Button>
      <Button variant="ghost" size="lg" onClick={redirectToStudy}>
        스터디 그룹
      </Button>
      <Button variant="ghost" size="lg" onClick={navigateToRecruit}>
        구인 공고
      </Button>
    </>
  )
}

export default CommonButtonMany

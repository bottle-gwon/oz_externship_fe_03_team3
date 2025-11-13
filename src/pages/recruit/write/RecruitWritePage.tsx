import RecruitWriteContent from '@/components/recruit/write/RecruitWriteContent'
import useStudyHubStore from '@/store/store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const RecruitWritePage = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const navigate = useNavigate()

  useEffect(() => {
    if (accessToken) {
      return
    }
    navigate('/recruit', { replace: true })
  }, [accessToken, navigate])

  if (!accessToken) {
    return null
  }

  return <RecruitWriteContent />
}

export default RecruitWritePage

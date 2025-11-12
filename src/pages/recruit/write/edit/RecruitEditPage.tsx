import NotFoundContent from '@/components/commonInGeneral/error/NotFoundContent'
import RecruitWriteContent from '@/components/recruit/write/RecruitWriteContent'
import useRecruitDetailQuery from '@/hooks/recruitDetail/useRecruitDetailQuery'
import useStudyHubStore from '@/store/store'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

const RecruitEditPage = () => {
  const recruitId = Number(useParams().recruitId)
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const setEditingRecruit = useStudyHubStore((state) => state.setEditingRecruit)

  const navigate = useNavigate()

  const { data, error, isPending } = useRecruitDetailQuery(recruitId)
  useEffect(() => {
    if (!data) {
      return
    }

    setEditingRecruit(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    if (accessToken) {
      return
    }
    navigate('/recruit', { replace: true })
  }, [accessToken, navigate])

  if (!accessToken) {
    return null
  }

  if (isPending) {
    // TODO: 스켈레톤을 만들어야 합니다
    return <p>여기에 스켈레톤을 넣어야 합니다</p>
  }

  if (error) {
    return <NotFoundContent path="/recruit" label="구인 공고로" />
  }

  return <RecruitWriteContent isEditing />
}

export default RecruitEditPage

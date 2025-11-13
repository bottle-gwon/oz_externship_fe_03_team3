import NotFoundContent from '@/components/commonInGeneral/error/NotFoundContent'
import RecruitWriteContent from '@/components/recruit/write/RecruitWriteContent'
import RecruitWriteSkeleton from '@/components/recruit/write/RecruitWriteSkeleton'
import useRecruitDetailQuery from '@/hooks/recruitDetail/useRecruitDetailQuery'
import useStudyHubStore from '@/store/store'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

const RecruitEditPage = () => {
  const params = useParams()
  const recruitUuid = params.recruitUuid ?? ''

  const accessToken = useStudyHubStore((state) => state.accessToken)
  const setEditingRecruit = useStudyHubStore((state) => state.setEditingRecruit)

  const navigate = useNavigate()

  const { data, error, isPending } = useRecruitDetailQuery(recruitUuid)
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
    return <RecruitWriteSkeleton />
  }

  if (error) {
    return <NotFoundContent path="/recruit" label="구인 공고로" />
  }

  return <RecruitWriteContent isEditing />
}

export default RecruitEditPage

import RecruitManageContent from '@/components/recruit/manage/RecruitManageContent'
import useStudyHubStore from '@/store/store'
import useRecruitManage from '@/hooks/recruit/useRecruitsManageQuery'
import ManageSkeleton from '@/components/recruit/manage/ManageSkeleton'
import UnknwonErrorContent from '@/components/commonInGeneral/error/UnknownErrorContent'
import useRecruitManageStore from '@/store/recruit/manage/recruitManageStore'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const RecruitManagePage = () => {
  const userId = useStudyHubStore((state) => state.me?.id ?? 0)
  const { isPending, error } = useRecruitManage()
  const recuitManageArray = useRecruitManageStore(
    (state) => state.recruitManageArray
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (userId) {
      return
    }
    navigate('/recruit')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  if (isPending && recuitManageArray.length === 0) {
    return <ManageSkeleton />
  }
  if (error) {
    return <UnknwonErrorContent />
  }

  return <RecruitManageContent />
}

export default RecruitManagePage

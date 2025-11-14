import RecruitManageContent from '@/components/recruit/manage/RecruitManageContent'
import useStudyHubStore from '@/store/store'
import useRecruitManage from '@/hooks/recruit/useRecruitsManageQuery'
import ManageSkeleton from '@/components/recruit/manage/ManageSkeleton'
import RecruitContent from '@/components/recruit/title/RecruitContent'
import UnknwonErrorContent from '@/components/commonInGeneral/error/UnknownErrorContent'

const RecruitManagePage = () => {
  const userId = useStudyHubStore((state) => state.me?.id ?? 0)
  const { isPending, error } = useRecruitManage()

  if (!userId) {
    return <RecruitContent />
  }

  if (isPending) {
    return <ManageSkeleton />
  }
  if (error) {
    return <UnknwonErrorContent />
  }

  return <RecruitManageContent />
}

export default RecruitManagePage

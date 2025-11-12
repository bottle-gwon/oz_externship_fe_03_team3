import RecruitManageContent from '@/components/recruit/manage/RecruitManageContent'
import useStudyHubStore from '@/store/store'
import RecruitListPage from '../RecruitListPage'
import useRecruitManage from '@/hooks/recruit/useRecruitsManageQuery'

const RecruitManagePage = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const userId = 24
  // const userId = useStudyHubStore((state) => state.me?.id ?? 0)
  const { isPending } = useRecruitManage(userId)
  if (!accessToken) {
    return <RecruitListPage />
  }

  if (isPending) {
    return <div>스켈레톤 들어갈 자리</div>
  }
  return <RecruitManageContent />
}

export default RecruitManagePage

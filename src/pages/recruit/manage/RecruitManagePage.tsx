import RecruitManageContent from '@/components/recruit/manage/RecruitManageContent'
import useStudyHubStore from '@/store/store'
import useRecruitManage from '@/hooks/recruit/useRecruitsManageQuery'
import ManageSkeleton from '@/components/recruit/manage/ManageSkeleton'
import RecruitContent from '@/components/recruit/title/RecruitContent'

const RecruitManagePage = () => {
  const userId = useStudyHubStore((state) => state.me?.id ?? 0)
  const { isPending, error } = useRecruitManage(userId)

  if (!userId) {
    return <RecruitContent />
  }

  if (isPending) {
    return <ManageSkeleton />
  }
  if (error) {
    return <p>뭔가 오류가 일어났어요 여기를 채워야 해요</p>
  }

  return <RecruitManageContent />
}

export default RecruitManagePage

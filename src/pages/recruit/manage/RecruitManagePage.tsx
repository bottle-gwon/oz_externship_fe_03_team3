import RecruitManageContent from '@/components/recruit/manage/RecruitManageContent'
import useStudyHubStore from '@/store/store'
import RecruitListPage from '../RecruitListPage'
import useRecruitManage from '@/hooks/recruit/useRecruitsManageQuery'

const RecruitManagePage = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const userId = 24
  //실제 api 연결 시 주석해제 후 위 userId 삭제
  //현재 명세서 상은 user_id 앤드포인트를 엑세스 토큰값에서 불러와야 되는거같아 문의드림. 답변오는대로 리펙토링 예정.
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

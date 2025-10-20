import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import type { PageProps } from '@/types'

const RecommendUser = ({ type }: PageProps) => {
  const userName = '김스터디' // 로그인 된 사용자, 추후에 수정
  const title =
    type === 'recruit' ? ` 님을 위한 맟춤 스터디 공고` : ` 님을 위한 추천 강의`
  return (
    <Vstack
      gap="none"
      className="h-[492px] w-[1306px] items-center justify-center rounded-xl border border-[#FEF08A] bg-[linear-gradient(to_right,#FEFCE8,#FFF7ED)]"
    >
      <Vstack gap="none">
        <Hstack gap="none" className="mb-6 items-center">
          <h3 className="w-[379px] text-2xl leading-8 font-semibold text-[#3E454C]">
            <span className="text-[#CA8A04]">{userName}</span>
            {title}
          </h3>
          <span className="h-6 w-[74px] rounded-sm bg-[#EA580C] px-2 py-1 text-center text-xs text-white">
            개인화 추천
          </span>
        </Hstack>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* 임시 카드 컴포넌트 */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-[346px] w-[389px] bg-white"></div>
          ))}
        </div>
      </Vstack>
    </Vstack>
  )
}

export default RecommendUser

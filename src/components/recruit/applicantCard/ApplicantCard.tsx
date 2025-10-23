import { Hstack } from '@/components/commonInGeneral/layout'
import Img from '@/components/commonInProject/img/Img'
import {
  experienceStyles,
  statusStyles,
  type Applicant,
} from '@/types/_applicantInterface'
import { Calendar } from 'lucide-react'
import UserRound from '@/assets/user-round.svg'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

const ProfileImage = ({ url }: { url: string | null }) => {
  return (
    <div className="h-12 w-12">
      <Img
        src={url || UserRound}
        fallbackImageUrl={UserRound}
        className={`bg-primary-100 h-full rounded-full ${url || 'p-oz-sm'}`}
      />
    </div>
  )
}

const ApplicantCard = ({ applicant }: { applicant: Applicant }) => {
  const statusStyle = statusStyles[applicant.status]
  const experienceStyle =
    experienceStyles[String(applicant.has_study_experience) as 'true' | 'false']

  return (
    <div className="h-[204px] w-[416px] gap-4 rounded-lg bg-[#F9FAFB] p-4">
      <div className="flex h-[64px] w-[384px] gap-4">
        <Hstack className="items-center">
          <ProfileImage url={applicant.application.profile_image} />
        </Hstack>
        <div className="flex h-11 w-80 justify-between">
          <div className="flex flex-col">
            <h3 className="leading-6 font-medium text-[#111827]">
              {applicant.application.nickname}
            </h3>
            <p className="text-sm leading-5 text-[#4B5563]">
              {applicant.application.gender}
            </p>
          </div>
          <RoundBox
            radius="sm"
            color={statusStyle.style}
            isBordered={false}
            className="h-6 px-2 py-1 text-xs"
          >
            {statusStyle.content}
          </RoundBox>
        </div>
      </div>
      <div className="flex flex-col gap-3 pl-16 text-sm leading-5 text-[#4B5563]">
        <div>
          <span className="flex items-center gap-2">
            <Calendar size={14} className="text-[#8A929F]" />
            지원일시: {applicant.created_at}
          </span>
        </div>
        <div>
          <p className="text-xs leading-4 font-medium text-[#374151]">
            가능한 시간대
          </p>
          <p>{applicant.available_time}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="p- text-xs leading-4 font-medium text-[#374151]">
            스터디 경험:
          </div>
          <RoundBox
            radius="sm"
            color={experienceStyle.style}
            isBordered={false}
            className="px-2 py-1 text-xs"
          >
            {experienceStyle.content}
          </RoundBox>
        </div>
      </div>
    </div>
  )
}

export default ApplicantCard

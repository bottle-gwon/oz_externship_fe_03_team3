import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import {
  experienceStyles,
  statusStyles,
  type Applicant,
} from '@/types/_applicantInterface'
import { Calendar } from 'lucide-react'
import Tag from '@/components/commonInProject/tag/Tag'
import ProfileImage from '@/components/commonInProject/ProfileImage/ProfileImage'

const ApplicantCard = ({ applicant }: { applicant: Applicant }) => {
  const statusStyle = statusStyles[applicant.status]
  const experienceStyle =
    experienceStyles[String(applicant.has_study_experience) as 'true' | 'false']

  return (
    <Vstack
      gap="lg"
      padding="lg"
      className="h-[204px] w-[408px] rounded-lg bg-[#F9FAFB]"
    >
      <Hstack gap="lg" className="h-[64px] w-[384px]">
        <Hstack className="items-center">
          <ProfileImage url={applicant.application.profile_image} size="lg" />
        </Hstack>
        <Hstack gap="none" className="h-11 w-80 justify-between">
          <Vstack gap="none">
            <h3 className="leading-6 font-medium text-[#111827]">
              {applicant.application.nickname}
            </h3>
            <p className="text-sm leading-5 text-[#4B5563]">
              {applicant.application.gender}
            </p>
          </Vstack>
          <Tag color={statusStyle.style} className="h-6">
            {statusStyle.content}
          </Tag>
        </Hstack>
      </Hstack>
      <Vstack gap="md" className="pl-16 text-sm leading-5 text-[#4B5563]">
        <Hstack gap="sm" className="items-center">
          <Calendar size={14} className="text-[#8A929F]" />
          지원일시: {applicant.created_at}
        </Hstack>
        <Vstack gap="none">
          <p className="text-xs leading-4 font-medium text-[#374151]">
            가능한 시간대
          </p>
          <p>{applicant.available_time}</p>
        </Vstack>
        <Hstack gap="sm" className="items-center">
          <div className="text-xs leading-4 font-medium text-[#374151]">
            스터디 경험:
          </div>
          <Tag color={experienceStyle.style}>{experienceStyle.content}</Tag>
        </Hstack>
      </Vstack>
    </Vstack>
  )
}

export default ApplicantCard

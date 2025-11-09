import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import { experienceStyles, statusStyles, type Applicant } from '@/types'
import { Calendar } from 'lucide-react'
import Tag from '@/components/commonInProject/tag/Tag'
import ProfileImage from '@/components/commonInProject/ProfileImage/ProfileImage'

interface ApplicantCardProps {
  applicant: Applicant
  onClick: () => void
}

const ApplicantCard = ({ applicant, onClick }: ApplicantCardProps) => {
  const statusStyle = statusStyles[applicant.status]
  const experienceStyle =
    experienceStyles[String(applicant.has_study_experience) as 'true' | 'false']

  return (
    <Vstack
      gap="lg"
      padding="lg"
      className="cursor-pointer rounded-lg bg-gray-50"
      onClick={onClick}
    >
      <Hstack gap="lg">
        <Hstack className="items-center">
          <ProfileImage url={applicant.application.profile_image} size="lg" />
        </Hstack>
        <Hstack gap="none" className="w-full justify-between">
          <Vstack gap="none">
            <h3 className="font-medium">{applicant.application.nickname}</h3>
            <p className="text-sm text-gray-600">
              {applicant.application.gender}
            </p>
          </Vstack>
          <Tag color={statusStyle.style} className="h-6">
            {statusStyle.content}
          </Tag>
        </Hstack>
      </Hstack>
      <Vstack gap="md" className="pl-16 text-sm text-gray-600">
        <Hstack gap="sm" className="items-center">
          <Calendar size={14} className="text-gray-400" />
          지원일시: {applicant.created_at}
        </Hstack>
        <Vstack gap="none">
          <p className="text-xs font-medium text-gray-700">가능한 시간대</p>
          <p>{applicant.available_time}</p>
        </Vstack>
        <Hstack gap="sm" className="items-center">
          <div className="text-xs font-medium text-gray-700">스터디 경험:</div>
          <Tag color={experienceStyle.style}>{experienceStyle.content}</Tag>
        </Hstack>
      </Vstack>
    </Vstack>
  )
}

export default ApplicantCard

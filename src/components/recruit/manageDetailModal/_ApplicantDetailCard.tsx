import { Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

interface ApplicantDetailProps {
  title: string
  content: string | string[]
}

const ApplicantDetailCard = ({ title, content }: ApplicantDetailProps) => {
  return (
    <Vstack gap="sm">
      <h4 className="text-sm font-bold text-gray-700">{title}</h4>
      <RoundBox isBordered={false} padding="lg" color="mono-dim">
        <p className="text-gray-700">
          {!Array.isArray(content) && content}
          {Array.isArray(content) && content.join(', ')}
        </p>
      </RoundBox>
    </Vstack>
  )
}

export default ApplicantDetailCard

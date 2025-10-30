import { Hstack } from '@/components/commonInGeneral/layout'
import SubHeaderTitle from './_SubHeaderTitle'
import SubHeaderSubtitle from './_SubHeaderSubTitle'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

interface SubHeaderProps {
  isBackButtonVisible?: boolean
  children?: React.ReactNode
}

const SubHeader = ({
  isBackButtonVisible = false,
  children,
}: SubHeaderProps) => {
  const navigate = useNavigate()
  const handleBack = () => navigate(-1)
  return (
    <Hstack
      gap="lg"
      className="mb-oz-xxl px-oz-xxl h-[100px] w-full items-center justify-between"
    >
      {isBackButtonVisible && (
        <button
          onClick={handleBack}
          className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-gray-100 py-2 hover:bg-gray-200"
        >
          <ArrowLeft size={17} className="text-gray-600" />
        </button>
      )}
      {children}
    </Hstack>
  )
}

SubHeader.Title = SubHeaderTitle
SubHeader.Subtitle = SubHeaderSubtitle

export default SubHeader

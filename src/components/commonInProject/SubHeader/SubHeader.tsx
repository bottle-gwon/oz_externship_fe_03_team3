import { Hstack } from '@/components/commonInGeneral/layout'
import SubHeaderTitle from './_SubHeaderTitle'
import SubHeaderSubtitle from './_SubHeaderSubTitle'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

interface SubHeaderProps {
  isBackButtonVisible?: boolean
  children: React.ReactNode
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
      className="h-[100px] w-[1216px] items-center justify-between pb-8"
    >
      {isBackButtonVisible && (
        <button
          onClick={handleBack}
          className="mr-4 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#F3F4F6] py-2 hover:bg-[#E5E7EB]"
        >
          <ArrowLeft size={17} className="text-[#3B4350]" />
        </button>
      )}
      {children}
    </Hstack>
  )
}

SubHeader.Title = SubHeaderTitle
SubHeader.Subtitle = SubHeaderSubtitle

export default SubHeader

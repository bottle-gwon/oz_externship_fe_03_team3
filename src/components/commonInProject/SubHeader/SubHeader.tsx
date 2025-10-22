import { Hstack } from '@/components/commonInGeneral/layout'
import SubHeaderTitle from './_SubHeaderTitle'
import SubHeaderSubtitle from './_SubHeaderSubTitle'
import SubHeaderBackButton from './_SubHeaderBackButton'

interface SubHeaderProps {
  children: React.ReactNode
}

const SubHeader = ({ children }: SubHeaderProps) => {
  return (
    <Hstack
      gap="none"
      className="h-[100px] w-[1216px] items-center justify-between pb-8"
    >
      {children}
    </Hstack>
  )
}

SubHeader.BackButton = SubHeaderBackButton
SubHeader.Title = SubHeaderTitle
SubHeader.Subtitle = SubHeaderSubtitle

export default SubHeader

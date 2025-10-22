import { Vstack } from '@/components/commonInGeneral/layout'

interface TitleSectionProps {
  children: React.ReactNode
}

const SubHeaderTitleSection = ({ children }: TitleSectionProps) => {
  return (
    <Vstack gap="none" className="h-[68px]">
      {children}
    </Vstack>
  )
}

export default SubHeaderTitleSection

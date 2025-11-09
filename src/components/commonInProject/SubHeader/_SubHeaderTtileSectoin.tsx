import { Vstack } from '@/components/commonInGeneral/layout'

interface TitleSectionProps {
  children: React.ReactNode
}

const SubHeaderTitleSection = ({ children }: TitleSectionProps) => {
  return <Vstack className="grow">{children}</Vstack>
}

export default SubHeaderTitleSection

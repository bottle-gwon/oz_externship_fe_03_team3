import { Hstack } from '@/components/commonInGeneral/layout'
import React from 'react'

interface ButtonSectionProps {
  children: React.ReactNode
}

const SubHeaderButtonSection = ({ children }: ButtonSectionProps) => {
  return <Hstack gap="md">{children}</Hstack>
}

export default SubHeaderButtonSection

import { Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { ReactNode } from 'react'

const H2 = ({ children }: { children: string }) => {
  return <h2 className="text-xl font-semibold">{children}</h2>
}

const TitledRoundBox = ({ children }: { children: ReactNode }) => {
  return (
    <RoundBox padding="xxl">
      <Vstack gap="xl">{children}</Vstack>
    </RoundBox>
  )
}

TitledRoundBox.Title = H2

export default TitledRoundBox

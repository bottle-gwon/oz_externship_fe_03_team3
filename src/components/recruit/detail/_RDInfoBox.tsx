import { Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { ReactNode } from 'react'

const RDInfoBoxTitle = ({ children }: { children: string }) => {
  return <h4 className="text-sm text-gray-600">{children}</h4>
}

const RDInfoBoxContent = ({ children }: { children: string }) => {
  return <p className="text-lg font-semibold">{children}</p>
}

const RDInfoBox = ({ children }: { children: ReactNode }) => {
  return (
    <RoundBox color="mono-dim" padding="lg">
      <Vstack className="items-center gap-0">{children}</Vstack>
    </RoundBox>
  )
}

RDInfoBox.Title = RDInfoBoxTitle
RDInfoBox.Content = RDInfoBoxContent

export default RDInfoBox

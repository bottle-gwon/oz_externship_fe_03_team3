import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { RecruitDetailAttachment } from '@/types'
import downloadFile from '@/utils/downloadFile'
import { ArrowDownToLine, FileText } from 'lucide-react'

const FileIcon = () => {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
      <FileText />
    </div>
  )
}

const RDAttachmentCard = ({
  attachment,
}: {
  attachment: RecruitDetailAttachment
}) => {
  return (
    <RoundBox padding="lg">
      <Hstack className="gap-oz-lg items-center">
        <FileIcon />
        <p className="grow font-medium">{attachment.file_name}</p>
        <Button
          onClick={() => downloadFile(attachment.url, attachment.file_name)}
        >
          <ArrowDownToLine size={16} />
          다운로드
        </Button>
      </Hstack>
    </RoundBox>
  )
}

export default RDAttachmentCard

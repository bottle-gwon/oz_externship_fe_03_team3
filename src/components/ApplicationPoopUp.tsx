import Button from '@/components/commonInGeneral/button/Button'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

type ApplicationPoopUpProps = {
  open: boolean
  onClose: () => void
}

const ApplicationPoopUp = ({ open, onClose }: ApplicationPoopUpProps) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30">
      <RoundBox
        color="mono-bright"
        isBordered
        radius="lg"
        padding="lg"
        className="w-[320px]"
      >
        <div className="mb-2 text-lg font-semibold">알림</div>
        <div className="mb-4 text-sm">제출이 완료되었습니다.</div>
        <div className="flex justify-end">
          <Button
            color="primary"
            variant="contained"
            status="enabled"
            size="md"
            onClick={onClose}
          >
            확인
          </Button>
        </div>
      </RoundBox>
    </div>
  )
}

export default ApplicationPoopUp

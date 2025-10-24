import { Hstack } from '../../commonInGeneral/layout'
import RoundBox from '../../commonInGeneral/roundBox/RoundBox'

// 어떻게 될지 아직 몰라서 임시 타입 입니다.
type UserStatus = {
  name: string
  id: number
  isConnected: boolean
  isLeader: boolean
}

interface StatusInterface {
  status: UserStatus
}

const ChatUserStatus = ({ status }: StatusInterface) => {
  const indicator = status.isConnected ? 'bg-success-500' : 'bg-gray-300'
  const leaderStyle = status.isLeader ? 'text-primary-600' : 'text-gray-700' //리더면 색 지정 다르게

  return (
    <RoundBox
      padding="none"
      isBordered={false}
      className="flex h-[24px] flex-shrink-0 px-3 py-1"
    >
      <Hstack gap="xs" padding="none" className="items-center justify-center">
        <div className={`h-2 w-2 rounded-full ${indicator}`}></div>
        <span className={`text-xs ${leaderStyle}`}>{status.name}</span>
      </Hstack>
    </RoundBox>
  )
}

export default ChatUserStatus

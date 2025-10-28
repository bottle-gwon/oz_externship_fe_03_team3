import { Vstack } from '@/components/commonInGeneral/layout'
import ChatListSkeletonCard from './ChatListSkeletonCard'

const ChatListSkeleton = () => {
  const sArray = Array.from({ length: 5 }, (_, i) => i + 1)
  return (
    <Vstack>
      {sArray.map((_, i) => (
        <ChatListSkeletonCard key={i} />
      ))}
    </Vstack>
  )
}

export default ChatListSkeleton

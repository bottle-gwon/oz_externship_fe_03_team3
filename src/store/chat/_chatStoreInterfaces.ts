import type { ChatMessage, ChatRoomData, ChatRoomOnline } from '@/types/_chat'

type ChatUIState =
  | { status: 'off' } //채팅창 닫기
  | { status: 'chatList' } //채팅방 목록 조회
  | { status: 'chatRoom'; id: string; title: string } //채팅방 접속

export interface chatStoreState {
  chatState: ChatUIState
  openChatList: () => void //채팅 목록 열기 (채팅 아이콘 클릭 했을때)
  openChatRoom: (id: string, title: string) => void
  closeChatUI: () => void //채팅방 닫기

  chatRoomArray: ChatRoomData[]
  setChatRoomArray: (chatRoomArray: ChatRoomData[]) => void

  chatMessageArray: ChatMessage[]
  setChatMessageArray: (chatMessageArray: ChatMessage[]) => void
  addChatMessage: (message: ChatMessage) => void
  addChatMessageArray: (message: ChatMessage[]) => void
  page: number
  setPage: (page: number) => void
  chatInit: boolean
  setChatInit: (chatInit: boolean) => void

  unReadCounter: number //안읽은 메시지 카운터
  setUnReadCounter: (newCount: number) => void

  // chat socket
  chatConnected: boolean //연결상태
  setChatConnected: (chatConnected: boolean) => void

  chatOnline: ChatRoomOnline | null //온라인 유저
  setChatOnline: (chatOnline: ChatRoomOnline) => void

  chatSocket: WebSocket | null
  chatConnect: (url: string) => void
  chatDisConnect: () => void
  sendMessage: (message: string) => void
  chatScrollBottom: boolean // 채팅 스크롤이 제일 아래 있는지 확인
  setChatScrollBottom: (chatScrollBottom: boolean) => void
}

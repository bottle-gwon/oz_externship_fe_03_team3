import { create } from 'zustand'
import type { chatStoreState } from './_chatStoreInterfaces'
import type { ChatMessage } from '@/types/_chat'

const useChatStore = create<chatStoreState>()((set, get) => ({
  // chat
  chatState: { status: 'off' },
  openChatList: () => set({ chatState: { status: 'chatList' } }),
  openChatRoom: (id, title) =>
    set({
      chatState: { status: 'chatRoom', id, title },
      page: 0,
      chatInit: true,
    }),
  closeChatUI: () => set({ chatState: { status: 'off' } }),
  unReadCounter: 0,
  setUnReadCounter: (newCount) => set({ unReadCounter: newCount }),
  chatRoomArray: [],
  setChatRoomArray: (chatRoomArray) => set({ chatRoomArray }),
  chatMessageArray: [],
  setChatMessageArray: (chatMessageArray) => set({ chatMessageArray }),
  addChatMessage: (message) =>
    set((state) => ({
      chatMessageArray: [...state.chatMessageArray, message],
    })),
  addChatMessageArray: (messageArray) =>
    set((state) => ({
      chatMessageArray: [...state.chatMessageArray, ...messageArray],
    })),
  page: 0,
  setPage: (page) => set({ page }),
  chatInit: true,
  setChatInit: (chatInit) => set({ chatInit }),

  // chat socket
  chatSocket: null,
  chatConnected: false,
  chatOnline: null, //온라인 유저
  setChatOnline: (chatOnline) => set({ chatOnline }),
  setChatConnected: (chatConnected) => set({ chatConnected }),

  chatConnect: (url) => {
    const ws = new WebSocket(url)

    // 초기 연결시 이벤트
    ws.addEventListener('open', () => {
      // console.log('연결 성공')
      get().setChatConnected(true)
    })
    // 메시지 수신
    ws.addEventListener('message', (event) => {
      // console.log('메시지 수신:', event.data)
      if (event.data !== '채팅 연결완') {
        const response = JSON.parse(event.data)
        if (response?.type === 'chat.message') {
          get().addChatMessage(response)
        } else if (response?.type === 'online.users') {
          get().setChatOnline(response)
        }
      }
    })

    // 에러 처리
    ws.addEventListener('error', () => {
      // console.error('채팅 소켓 에러:', error) // 임시 에러
      const now = new Date()
      const ErrorMessage = <ChatMessage>{
        type: 'chat.message',
        id: -1,
        content: `에러 발생 연결 해제 했습니다 추후 다시 시도 해주세요.`,
        sender: { id: -1, nickname: '시스템' },
        created_at: now.toISOString(),
      }
      get().addChatMessage(ErrorMessage)
      get().setChatConnected(false) // 에러 발생시 연결 해제
    })

    // 연결 종료
    ws.addEventListener('close', () => {
      // console.log('연결 종료')
      get().setChatConnected(false)
      set({ chatSocket: null })
    })

    set({ chatSocket: ws })
  },

  chatDisConnect: () => {
    const socket = get().chatSocket
    if (socket) {
      socket.close()
      set({ chatSocket: null, chatConnected: false })
    }
  },

  sendMessage: (message) => {
    const chatSocket = get().chatSocket
    const chatSend = { type: 'chat.message', content: message }

    if (chatSocket?.readyState === WebSocket.OPEN)
      chatSocket.send(JSON.stringify(chatSend))
  },
  chatScrollBottom: false,
  setChatScrollBottom: (chatScrollBottom) => set({ chatScrollBottom }),
}))

export default useChatStore

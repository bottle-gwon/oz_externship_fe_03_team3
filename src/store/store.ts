import { create } from 'zustand'
import type { StudyHubState } from './_storeInterfaces'
import { createJSONStorage, persist } from 'zustand/middleware'

// NOTE: 초깃값을 설정합니다
// NOTE: 여기에 작성되는 변수 순서는 interface의 변수 순서를 따릅니다
// NOTE: Cmd + K, 4을 이용해 코드를 접으면서 보면 편합니다. 펼칠 땐 Cmd + K, J 를 사용합니다.
const useStudyHubStore = create<StudyHubState>()(
  persist(
    (set, get) => ({
      fruitArray: [],
      setFruitArray: (fruitArray) => set({ fruitArray }), // 간단히 상태를 바꿀 땐 이렇게 하면 됩니다.
      addFruitToArray: (fruit) => {
        // 상태를 가져올 땐 get 사용
        const state = get()
        const prevArray = state.fruitArray

        // ... 사용하고 싶은 로직
        const newArray = [...prevArray, fruit]

        // set은 상태를 변경할 때만 사용
        set({ fruitArray: newArray })
      }, // 자주 쓰이는 복잡한 로직은 이런 식으로 전역 함수로 만들 수도 있습니다

      // common
      accessToken: null,
      setAccessToken: (accessToken) => set({ accessToken }),
      me: null,
      setMe: (me) => set({ me }),

      isClearingSearch: false,
      setIsClearingSearch: (isClearingSearch) => set({ isClearingSearch }),
      isFocusingSearch: false,
      setIsFocusingSearch: (isFocusingSearch) => set({ isFocusingSearch }),

      modalKey: null,
      setModalKey: (modalKey) => set({ modalKey }),

      modalKeyArray: [],
      setModalKeyArray: (modalKeyArray) => set({ modalKeyArray }),
      appendModalKeyToArray: (modalKey) => {
        const modalKeyArray = get().modalKeyArray
        set({ modalKeyArray: [...modalKeyArray, modalKey] })
      },
      removeModalKeyFromArray: (modalKey) => {
        const modalKeyArray = get().modalKeyArray.filter(
          (el) => el !== modalKey
        )
        set({ modalKeyArray })
      },

      // recruit
      studyGroupArray: [],
      setStudyGroupArray: (studyGroupArray) => set({ studyGroupArray }),

      recruitArray: [],
      setRecruitArray: (recruitArray) => set({ recruitArray }),

      selectedTagArray: [],
      setSelectedTagArray: (selectedTagArray) => set({ selectedTagArray }),

      editingRecruit: null,
      setEditingRecruit: (editingRecruit) => set({ editingRecruit }),

      // lecture

      // chat
      chatState: { status: 'off' },
      openChatList: () => set({ chatState: { status: 'chatList' } }),
      openChatRoom: (id, title) =>
        set({ chatState: { status: 'chatRoom', id, title } }),
      closeChatUI: () => set({ chatState: { status: 'off' } }),
      unReadCounter: 0,
      setUnReadCounter: (newCount) => set({ unReadCounter: newCount }),
      chatRoomArray: [],
      setChatRoomArray: (chatRoomArray) => set({ chatRoomArray }),
      chatMessageArray: [],
      setChatMessageArray: (chatMessageArray) => set({ chatMessageArray }),
      addChatMessageArray: (message) =>
        set((state) => ({
          chatMessageArray: [...state.chatMessageArray, message],
        })),

      // chat socket
      chatSocket: null,
      chatConnected: false,
      setChatConnected: (chatConnected) => set({ chatConnected }),

      chatConnect: (url) => {
        const ws = new WebSocket(url)

        // 초기 연결시 이벤트
        ws.addEventListener('open', () => {
          console.log('연결 성공')
          get().setChatConnected(true)
        })
        // 메시지 수신
        ws.addEventListener('message', (event) => {
          console.log('메시지 수신:', event.data)
          if (event.data !== '채팅 연결완') {
            get().addChatMessageArray(JSON.parse(event.data))
          }
        })

        // 에러 처리
        ws.addEventListener('error', (error) => {
          console.error('채팅 소켓 에러:', error) // 임시 에러
          get().setChatConnected(false) // 에러 발생시 연결 해제
        })

        // 연결 종료
        ws.addEventListener('close', () => {
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

      // notification
    }),
    {
      name: 'studyhub-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      partialize: (state) => ({ accessToken: state.accessToken, me: state.me }),
    }
  )
)

export default useStudyHubStore

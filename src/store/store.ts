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
      lectureArray: [],
      setLectureArray: (lectureArray) => set({ lectureArray }),

      // chat
      chatState: { status: 'off' },
      openChatList: () => set({ chatState: { status: 'chatList' } }),
      openChatRoom: (id, title) =>
        set({ chatState: { status: 'chatRoom', id, title } }),
      closeChatUI: () => set({ chatState: { status: 'off' } }),
      unReadCounter: 0,
      setUnReadCounter: (newCount) => set({ unReadCounter: newCount }),

      // notification
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      partialize: (state) => ({ fruitArray: state.fruitArray }),
    }
  )
)

export default useStudyHubStore

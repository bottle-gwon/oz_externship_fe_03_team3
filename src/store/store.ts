import { create } from 'zustand'
import type { StudyHubState } from './_storeInterfaces'
import { createJSONStorage, persist } from 'zustand/middleware'

const useStudyHubStore = create<StudyHubState>()(
  persist(
    (set, get) => ({
      // NOTE: 초깃값을 설정합니다
      // 여기에 작성되는 변수 순서는 interface의 변수 순서를 따릅니다

      example: 0,
      addDiffOnExample: (diff) => {
        // 상태를 가져올 땐 get 사용
        const state = get()
        const prevSomething = state.example

        // ... 사용하고 싶은 로직
        const something = prevSomething + diff

        // set은 상태를 변경할 때만 사용
        set({ example: something })
      },

      accessToken: null,
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      // partialize: (state) => ({ foo: state.foo }),
    }
  )
)

export default useStudyHubStore

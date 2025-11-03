type ChatUIState =
  | { status: 'off' } //채팅창 닫기
  | { status: 'chatList' } //채팅방 목록 조회
  | { status: 'chatRoom'; id: number; title: string } //채팅방 접속

// NOTE: 사용 전 아래를 읽어주세요.
// NOTE: 1. 스토어의 타입은 store.ts 외의 파일에선 임포트 될 일이 없으므로 store.ts와 같은 폴더에 둡니다.
// NOTE: 2. 스토어에 저장되는 모든 변수는 camelCase를 따라야 합니다.
// NOTE:     - 저장된 변수: 무조건 camelCase
// NOTE:     - 저장된 변수 안의 props: 백엔드에서 snake_case로 줬으면 그대로 저장
// NOTE: 3. 전역 상태 관리는 props drilling 을 막기 위해서 사용합니다.
// NOTE:     - 여러 페이지에서 해당 상태를 필요로 하거나
// NOTE:     - 부모에서 자식으로 상태를 넘겨 줄 때 한 번보다 더 많이 내려줘야 할 때만 사용합니다.
// NOTE:     - 한 번만 내려줘서 해결되면 전역 상태로 등록하지 않습니다.

import type { Lecture, Me, StudyGroup, Recruit, RecruitDetail } from '@/types'

export interface StudyHubState {
  fruitArray: string[] // 타입 정의 예시 1
  setFruitArray: (fruitArrya: string[]) => void
  addFruitToArray: (fruit: string) => void // 타입 정의 예시 2

  // 아래에 추가할 전역 변수의 타입들을 선언해주시면 됩니다

  // common
  accessToken: string | null
  setAccessToken: (accessToken: string | null) => void
  me: Me | null
  setMe: (me: Me | null) => void

  isClearingSearch: boolean // true 가 감지되면 인풋 필드를 비워주세요
  setIsClearingSearch: (isClearingSearch: boolean) => void
  isFocusingSearch: boolean // true 가 감지되면 인풋 필드에 포커스해주세요
  setIsFocusingSearch: (isFocusingSearch: boolean) => void

  modalKey: string | null // 모달을 하나만 띄울 때 사용해주세요. modalKey가 원하는 값과 일치하면 isOn이 되게 하면 됩니다
  setModalKey: (modalKey: string | null) => void // 모달을 끌 땐 modalKey를 null로 바꿔주세요

  modalKeyArray: string[] // 모달 위에 모달을 띄울 때 사용해주세요
  setModalKeyArray: (modalKeyArray: string[]) => void

  // recruit
  studyGroupArray: StudyGroup[]
  setStudyGroupArray: (studyGroupArray: StudyGroup[]) => void

  recruitArray: Recruit[]
  setRecruitArray: (recruitArray: Recruit[]) => void

  selectedTagArray: string[]
  setSelectedTagArray: (selectedTagArray: string[]) => void

  editingRecruit: RecruitDetail | null
  setEditingRecruit: (editingRecruit: RecruitDetail | null) => void

  // lecture

  // chat
  chatState: ChatUIState
  openChatList: () => void //채팅 목록 열기 (채팅 아이콘 클릭 했을때)
  openChatRoom: (id: number, title: string) => void
  closeChatUI: () => void //채팅방 닫기

  unReadCounter: number //안읽은 메시지 카운터
  setUnReadCounter: (newCount: number) => void

  // notification
}

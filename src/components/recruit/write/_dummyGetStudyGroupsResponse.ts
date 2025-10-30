import type { StudyGroup } from '@/types/_studyInterfaces'

interface DummyGetStudyGroupsResponse {
  status: number
  message: string
  data: {
    study_groups: StudyGroup[]
  }
}

const dummyGetStudyGroupsResponse: DummyGetStudyGroupsResponse = {
  status: 200,
  message: '스터디 그룹 목록 조회에 성공했습니다.',
  data: {
    study_groups: [
      {
        id: 1,
        name: '파이썬으로 몸짱되기',
        current_headcount: 2,
        max_headcount: 5,
        is_leader: false,
        profile_img_url: '',
        start_at: '',
        end_at: '',
        status: '',
        lectures: [
          {
            id: 1,
            title: '파이썬이 미래다',
            instructor: '파파고',
            price: 100_000,
          },
          {
            id: 2,
            title: '파이썬 유령',
            instructor: '마마고',
            price: 100_000,
          },
        ],
        review_count: 3,
        star_rating_average: 4.7,
        is_reviewed: false,
      },
      {
        id: 2,
        name: 'JavaScript로 탈모 치료하기',
        current_headcount: 3,
        max_headcount: 6,
        is_leader: true,
        profile_img_url: 'https://example.com/bald-programmer.jpg',
        start_at: '2024-11-01',
        end_at: '2024-12-31',
        status: 'active',
        lectures: [
          {
            id: 3,
            title: 'async/await로 머리카락 기다리기',
            instructor: '대머리박사',
            price: 89_000,
          },
          {
            id: 4,
            title: 'Promise로 약속하는 새치료법',
            instructor: '모발왕',
            price: 120_000,
          },
        ],
        review_count: 42,
        star_rating_average: 3.8,
        is_reviewed: true,
      },
      {
        id: 3,
        name: 'CSS로 인생 레이아웃 정리하기',
        current_headcount: 1,
        max_headcount: 3,
        is_leader: false,
        profile_img_url: 'https://example.com/messy-life.jpg',
        start_at: '2024-10-15',
        end_at: '2025-01-15',
        status: 'recruiting',
        lectures: [
          {
            id: 5,
            title: 'Flexbox로 유연한 사고 만들기',
            instructor: '정리왕김씨',
            price: 95_000,
          },
          {
            id: 6,
            title: 'Grid로 인생 계획 세우기',
            instructor: '라이프코치',
            price: 150_000,
          },
        ],
        review_count: 1,
        star_rating_average: 5.0,
        is_reviewed: false,
      },
      {
        id: 4,
        name: 'Node.js로 야식 주문 자동화',
        current_headcount: 4,
        max_headcount: 4,
        is_leader: false,
        profile_img_url: 'https://example.com/hungry-dev.jpg',
        start_at: '2024-12-01',
        end_at: '2024-12-07',
        status: 'full',
        lectures: [
          {
            id: 7,
            title: 'Express로 치킨 배달 최적화',
            instructor: '야식마스터',
            price: 200_000,
          },
          {
            id: 8,
            title: 'MongoDB로 먹방 기록 저장하기',
            instructor: '먹방의신',
            price: 180_000,
          },
          {
            id: 9,
            title: 'Socket.io로 실시간 배고픔 알림',
            instructor: '헝그리코더',
            price: 220_000,
          },
        ],
        review_count: 999,
        star_rating_average: 4.9,
        is_reviewed: true,
      },
    ],
  },
}

export default dummyGetStudyGroupsResponse

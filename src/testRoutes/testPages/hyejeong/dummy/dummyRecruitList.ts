import type { Recruit } from '@/types'
import img from '@/testRoutes/testPages/nari/d8b6dce9691774374a170cfc1d2c92b1b571c146.jpg'

export const dummyRecruitArray: Recruit[] = [
  {
    uuid: '233991fc-18dd-46ca-95c8-21b4a523d9be',
    title: 'test 공고',
    thumbnail_img_url:
      'https://cdn.default.com/recruitments/default-thumbnail.png',
    expected_headcount: 5,
    lectures: [
      {
        uuid: 'b4e10ab3-8fee-44f8-8977-db56daef18be',
        title: '신경식의 딥러닝 - Gradient-based Linear Regression (1)',
        instructor: '공대형아(신경식)',
        thumbnail_img_url:
          'https://cdn.inflearn.com/public/files/courses/339519/cover/01k99eknnjacss3xe2gh9xnpw0',
        platform: 'INFLEARN',
        url_link: 'https://www.inflearn.com/course/신경식의-딥러닝-gradient-ba',
      },
    ],
    tags: [
      { id: 2, name: '장고' },
      { id: 5, name: 'JavaScript' },
      { id: 6, name: 'Python' },
      { id: 9, name: 'FastAPI' },
      { id: 13, name: '데이터베이스' },
    ],
    close_at: '2025-11-25T20:08:38.095073+09:00',
    views_count: 0,
    bookmark_count: 1,
    is_closed: false,
    is_bookmarked: false,
  },
  {
    uuid: '550e8400-e22b-41d4-a716-446655440010',
    title: '블록체인 & Web3 개발자 양성 스터디',
    thumbnail_img_url: img,
    expected_headcount: 6,
    lectures: [
      {
        uuid: 'b9a110ab-3bee-4b9b-9c89-34b91d9a8ce1',
        title: '블록체인 기초',
        instructor: '김강사',
        thumbnail_img_url: img,
        platform: 'INFLEARN',
        url_link: 'https://www.inflearn.com/course/블록체인-기초',
      },
    ],
    tags: [
      { id: 5, name: '블록체인' },
      { id: 6, name: 'Web3' },
      { id: 7, name: 'Solidity' },
      { id: 4, name: '프론트엔드' },
    ],
    close_at: '2025-12-30T23:59:59Z',
    views_count: 278,
    bookmark_count: 173,
    is_closed: false,
    is_bookmarked: false,
  },
  {
    uuid: '550e8400-e22b-41d4-a716-446655440020',
    title: 'Spring Boot 백엔드 마스터 스터디',
    thumbnail_img_url: img,
    expected_headcount: 6,
    lectures: [
      {
        uuid: 'a4c991fc-11bb-46ca-95c8-21b4a523d999',
        title: 'Spring Boot 완벽 가이드',
        instructor: '이백엔드',
        thumbnail_img_url: 'https://cdn.example.com/lectures/springboot.jpg',
        platform: 'FASTCAMPUS',
        url_link: 'https://fastcampus.co.kr/dev_camp_springboot',
      },
    ],
    tags: [
      { id: 8, name: 'Spring Boot' },
      { id: 9, name: 'Java' },
      { id: 10, name: '백엔드' },
      { id: 11, name: '기업프로젝트' },
    ],
    close_at: '2025-12-30T23:59:59Z',
    views_count: 324,
    bookmark_count: 89,
    is_closed: false,
    is_bookmarked: false,
  },
  {
    uuid: 'b0f8e91b-4a33-4e91-bf80-4f4e5e89d123',
    title: 'DevOps & AWS 클라우드 실무 스터디',
    thumbnail_img_url: img,
    expected_headcount: 5,
    lectures: [
      {
        uuid: 'e7b4e91b-3c44-4b9b-8d90-4f4e5e89d777',
        title: 'AWS 인프라 구축 실습',
        instructor: '박클라우드',
        thumbnail_img_url: 'https://cdn.example.com/lectures/aws.jpg',
        platform: 'COURSERA',
        url_link: 'https://coursera.org/aws-devops',
      },
    ],
    tags: [
      { id: 12, name: 'DevOps' },
      { id: 13, name: 'AWS' },
      { id: 14, name: '클라우드' },
      { id: 15, name: '인프라' },
    ],
    close_at: '2025-10-03T23:59:59Z',
    views_count: 167,
    bookmark_count: 28,
    is_closed: false,
    is_bookmarked: true,
  },
]

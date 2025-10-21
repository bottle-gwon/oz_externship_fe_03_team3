import type { Lecture } from '@/types'
import type { recruit } from '@/types/interfaceRecruit'
import img from '@/testRoutes/testPages/nari/d8b6dce9691774374a170cfc1d2c92b1b571c146.jpg'

export const dummyLectureRecommendArray: Lecture[] = [
  {
    uuid: '550e8400-e22b-41d4-a716-446655440000',
    title: 'Django 완벽 가이드',
    instructor: '홍길동',
    thumbnail_img_url: 'https://example.com/image.jpg',
    categories: [
      {
        id: 1,
        name: '백엔드',
      },
      {
        id: 5,
        name: 'Django',
      },
    ],
    difficulty: 'EASY',
    original_price: 100000,
    discount_price: 50000,
    platform: 'inflearn',
    average_rating: 4.75,
    url_link: 'https://inflearn.com/course/django-guide',
  },
  {
    uuid: '550e8400-e29b-41d4-a716-446655411110',
    title: 'Django 완벽 가이드',
    instructor: '홍길동',
    thumbnail_img_url: 'https://example.com/image.jpg',
    categories: [
      {
        id: 1,
        name: '백엔드',
      },
      {
        id: 5,
        name: 'Django',
      },
    ],
    difficulty: 'NORMAL',
    original_price: 100000,
    discount_price: 50000,
    platform: 'inflearn',
    average_rating: 4.75,
    url_link: 'https://inflearn.com/course/django-guide',
  },
  {
    uuid: '550e8400-e29b-41d4-a716-446652440000',
    title: 'Django 완벽 가이드',
    instructor: '홍길동',
    thumbnail_img_url: 'https://example.com/image.jpg',
    categories: [
      {
        id: 1,
        name: '백엔드',
      },
      {
        id: 5,
        name: 'Django',
      },
    ],
    difficulty: 'NORMAL',
    original_price: 100000,
    discount_price: 50000,
    platform: 'inflearn',
    average_rating: 4.75,
    url_link: 'https://inflearn.com/course/django-guide',
  },
]

export const dummyRecruitRecommendArray: recruit[] = [
  {
    id: 101,
    uuid: 'b0f8e91E-4a33-4e91-bf80-4f4e5e89d123',
    title: 'AI 스터디 모집합니다!',
    thumbnail_img_url: img,
    expected_headcount: 5,
    views_count: 153,
    bookmark_count: 8,
    due_date: '2025-10-30T23:59:59Z',
    is_closed: false,
    tags: [
      { id: 1, name: 'AI' },
      { id: 2, name: 'Python' },
      { id: 3, name: '딥러닝' },
    ],
    study_group: {
      id: 12,
      uuid: '3fcd9e3e-1a12-4af8-8899-ec2df3f9b333',
      name: 'AI 기초반',
      lectures: [
        {
          id: 201,
          title: '파이썬으로 배우는 인공지능 입문',
          instructor: '홍길동',
        },
        {
          id: 202,
          title: '딥러닝 기본 개념',
          instructor: '이영희',
        },
      ],
    },
    author: {
      id: 3,
      nickname: 'study_master',
      profile_img_url: 'https://example.com/users/3/profile.jpg',
    },
    is_bookmarked: true,
    created_at: '2025-10-14T11:22:00Z',
  },
  {
    id: 101,
    uuid: 'b0f8e91a-4a33-4e91-bf80-4f4e5e89d123',
    title: 'AI 스터디 모집합니다!',
    thumbnail_img_url: img,
    expected_headcount: 5,
    views_count: 153,
    bookmark_count: 8,
    due_date: '2025-10-30T23:59:59Z',
    is_closed: false,
    tags: [
      { id: 1, name: 'AI' },
      { id: 2, name: 'Python' },
      { id: 3, name: '딥러닝' },
    ],
    study_group: {
      id: 12,
      uuid: '3fcd9f3e-1a12-4af8-8899-ec2df3f9b333',
      name: 'AI 기초반',
      lectures: [
        {
          id: 201,
          title: '파이썬으로 배우는 인공지능 입문',
          instructor: '홍길동',
        },
        {
          id: 202,
          title: '딥러닝 기본 개념',
          instructor: '이영희',
        },
      ],
    },
    author: {
      id: 3,
      nickname: 'study_master',
      profile_img_url: 'https://example.com/users/3/profile.jpg',
    },
    is_bookmarked: true,
    created_at: '2025-10-14T11:22:00Z',
  },
  {
    id: 101,
    uuid: 'b0f8e91b-4a33-4e91-bf80-4f4e5e89d123',
    title: 'AI 스터디 모집합니다!',
    thumbnail_img_url: img,
    expected_headcount: 5,
    views_count: 153,
    bookmark_count: 8,
    due_date: '2025-10-30T23:59:59Z',
    is_closed: false,
    tags: [
      { id: 1, name: 'AI' },
      { id: 2, name: 'Python' },
      { id: 3, name: '딥러닝' },
    ],
    study_group: {
      id: 12,
      uuid: '3fcd9f3e-1a12-4af8-8899-ec2df3f9b333',
      name: 'AI 기초반',
      lectures: [
        {
          id: 201,
          title: '파이썬으로 배우는 인공지능 입문',
          instructor: '홍길동',
        },
        {
          id: 202,
          title: '딥러닝 기본 개념',
          instructor: '이영희',
        },
      ],
    },
    author: {
      id: 3,
      nickname: 'study_master',
      profile_img_url: 'https://example.com/users/3/profile.jpg',
    },
    is_bookmarked: true,
    created_at: '2025-10-14T11:22:00Z',
  },
]

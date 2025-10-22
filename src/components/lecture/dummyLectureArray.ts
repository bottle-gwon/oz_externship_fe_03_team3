import type { Lecture } from '@/types'

export const dummyLectureArray: Lecture[] = [
  {
    uuid: '550e8400-e22b-41d4-a716-446655440000',
    title: 'Arch Linux 완벽 가이드',
    instructor: '퓨디파이',
    thumbnail_img_url: 'https://example.com/image.jpg',
    categories: [
      {
        id: 11,
        name: '리눅스',
      },
      {
        id: 55,
        name: 'Arch',
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
    title: 'HTMX 완벽 가이드',
    instructor: '프라이머젠',
    thumbnail_img_url: 'https://example.com/image.jpg',
    categories: [
      {
        id: 2,
        name: '프론트엔드',
      },
      {
        id: 6,
        name: 'HTMX',
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
    title: 'Swift is Better Rust',
    instructor: '팀쿡',
    thumbnail_img_url: 'https://example.com/image.jpg',
    categories: [
      {
        id: 1,
        name: '백엔드',
      },
      {
        id: 7,
        name: 'Swift',
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
    uuid: '550e8400-e29b-41d4-a716-446645440000',
    title: 'Django 면접 대비',
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
    difficulty: 'HARD',
    original_price: 100000,
    discount_price: 50000,
    platform: 'inflearn',
    average_rating: 4.75,
    url_link: 'https://inflearn.com/course/django-guide',
  },
]

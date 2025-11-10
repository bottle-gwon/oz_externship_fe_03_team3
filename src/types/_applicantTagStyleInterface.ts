import type { Color } from './_commonInGeneralInterfaces'

export type ApplicantStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED'

export const statusStyles: Record<
  ApplicantStatus,
  { content: string; style: Color }
> = {
  PENDING: { content: '대기중', style: 'primary' },
  ACCEPTED: { content: '승인됨', style: 'success' },
  REJECTED: { content: '거절됨', style: 'danger' },
}

export const experienceStyles: Record<
  'true' | 'false',
  { content: string; style: Color }
> = {
  true: { content: '경험 있음', style: 'success' },
  false: { content: '경험 없음', style: 'mono' },
}

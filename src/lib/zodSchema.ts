import * as z from 'zod'

export const helperText = {
  selfIntroduction:
    '본인에 대해 간략하게 소개해주세요. (학습 배경, 관심 분야, 현재 수준 등)',
  motivation: '이 스터디에 지원하게 된 동기를 작성해주세요.',
  objective: '이 스터디를 통해 달성하고 싶은 목표를 작성해주세요.',
  availableTime:
    '스터디 참여가 가능한 요일과 시간대를 작성해주세요. (예: 평일 19-21시, 주말 오후)',
  studyExperience: '스터디 경험이 없으시면 비워두셔도 됩니다.',
} as const

export const dangerHelperText = {
  selfIntroduction: '자기소개를 작성해주세요. (필수입력)',
  motivation: '지원 동기를 작성해주세요. (필수입력)',
  objective: '스터디 목표를 작성해주세요. (필수입력)',
  availableTime: '가능한 시간대를 작성해주세요. (필수입력)',
  studyExperience: '경험을 체크했다면 간단히 작성해주세요.',
} as const

export const applicationSchema = z
  .object({
    selfIntroduction: z
      .string()
      .trim()
      .min(1, dangerHelperText.selfIntroduction)
      .max(500),
    motivation: z.string().trim().min(1, dangerHelperText.motivation).max(500),
    objective: z.string().trim().min(1, dangerHelperText.objective).max(500),
    availableTime: z
      .string()
      .trim()
      .min(1, dangerHelperText.availableTime)
      .max(500),
    hasStudyExperience: z.boolean(),
    studyExperience: z.string().trim().max(500).optional(),
  })
  .superRefine((vel, ctx) => {
    if (vel.hasStudyExperience && !vel.studyExperience?.trim().length) {
      ctx.addIssue({
        code: 'custom',
        path: ['studyExperience'],
        message: dangerHelperText.studyExperience,
      })
    }
  })

export type ApplicationForm = z.infer<typeof applicationSchema>

export const defaultApplicationValues: ApplicationForm = {
  selfIntroduction: '',
  motivation: '',
  objective: '',
  availableTime: '',
  hasStudyExperience: false,
  studyExperience: '',
}

export const recruitWriteSchema = z.object({
  title: z.string().min(1, '제목을 입력하세요'),
  content: z.string().min(1, '스터디 그룹을 소개해주세요'),
  due_data: z.date().min(new Date(), '마감일은 오늘 이후여야 합니다'), // 어떻게 필수로 만들지?
  expected_personnel: z.number().min(1, '모집 인원을 선택해주세요'),
  study_group_id: z.number().min(1, '스터디 모집 인원을 선택해주세요'), // 필수로 만들어야
  estimated_cost: z.number(),
  tags: z.array(z.string()),
  attachments: z.array(z.file()),
  images: z.array(z.string()),
})

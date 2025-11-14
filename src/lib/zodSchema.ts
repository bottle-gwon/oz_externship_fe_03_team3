import { RECRUIT_WRITE_CONFIG } from '@/utils/constants'
import * as z from 'zod'

export const helperText = {
  self_introduction:
    '본인에 대해 간략하게 소개해주세요. (학습 배경, 관심 분야, 현재 수준 등)',
  motivation: '이 스터디에 지원하게 된 동기를 작성해주세요.',
  objective: '이 스터디를 통해 달성하고 싶은 목표를 작성해주세요.',
  available_time:
    '스터디 참여가 가능한 요일과 시간대를 작성해주세요. (예: 평일 19-21시, 주말 오후)',
  study_experience: '스터디 경험이 없으시면 비워두셔도 됩니다.',
} as const

export const dangerHelperText = {
  self_introduction: '자기소개를 작성해주세요. (필수입력)',
  motivation: '지원 동기를 작성해주세요. (필수입력)',
  objective: '스터디 목표를 작성해주세요. (필수입력)',
  available_time: '가능한 시간대를 작성해주세요. (필수입력)',
  study_experience: '경험을 체크했다면 간단히 작성해주세요.',
} as const

export const applicationSchema = z
  .object({
    self_introduction: z
      .string()
      .trim()
      .min(1, dangerHelperText.self_introduction)
      .max(500),
    motivation: z.string().trim().min(1, dangerHelperText.motivation).max(500),
    objective: z.string().trim().min(1, dangerHelperText.objective).max(500),
    available_time: z
      .string()
      .trim()
      .min(1, dangerHelperText.available_time)
      .max(500),
    has_study_experience: z.boolean(),
    study_experience: z.string().trim().max(500).optional(),
  })
  .superRefine((vel, ctx) => {
    if (vel.has_study_experience && !vel.study_experience?.trim().length) {
      ctx.addIssue({
        code: 'custom',
        path: ['study_experience'],
        message: dangerHelperText.study_experience,
      })
    }
  })

export type ApplicationForm = z.infer<typeof applicationSchema>

export const defaultApplicationValues: ApplicationForm = {
  self_introduction: '',
  motivation: '',
  objective: '',
  available_time: '',
  has_study_experience: false,
  study_experience: '',
}

const recruitWriteCommonObject = {
  expected_headcount: z
    .number('예상 모집 인원을 선택해주세요')
    .min(1, '예상 모집 인원을 선택해주세요'),
  study_group: z
    .string('스터디 그룹을 선택해주세요')
    .min(1, '스터디 그룹을 선택해주세요'),
  estimated_fee: z.preprocess(
    (arg) => (!arg ? undefined : arg),
    z.coerce.number().nullish()
  ),
  tags: z.preprocess(
    (arg: string[]) => (arg.length === 0 ? undefined : arg),
    z
      .array(z.string())
      .max(
        RECRUIT_WRITE_CONFIG.MAX_TAG,
        `태그는 ${RECRUIT_WRITE_CONFIG.MAX_TAG}개를 초과할 수 없습니다`
      )
      .nullish()
  ),
  attachments: z
    .array(
      z
        .file()
        .max(
          RECRUIT_WRITE_CONFIG.MAX_ATTACHMENT_SIZE,
          `참고 파일은 ${Math.round(RECRUIT_WRITE_CONFIG.MAX_ATTACHMENT_SIZE / 1_000_000)}MB를 초과할 수 없습니다`
        )
    )
    .max(
      RECRUIT_WRITE_CONFIG.MAX_ATTACHMENT,
      `참고 파일은 ${RECRUIT_WRITE_CONFIG.MAX_ATTACHMENT}개를 초과할 수 없습니다`
    )
    .nullish(),
}

const recruitWriteSpecificObejct = {
  title: z.string().min(1, '제목을 입력하세요'),
  content: z.string().min(1, '스터디 그룹을 소개해주세요'),
  close_at: z.string().min(1, '공고 마감 기한을 선택해주세요'),
}

const recruitEditSpecificObject = {
  title: z
    .string()
    .transform((arg) => (arg === '' ? undefined : arg))
    .nullish(),
  content: z
    .string()
    .transform((arg) => (arg === '' ? undefined : arg))
    .nullish(),
  close_at: z.preprocess(
    (arg) => (arg === '' ? undefined : arg),
    z.string().nullish()
  ),
}

export const recruitWriteSchema = z
  .object({
    ...recruitWriteCommonObject,
    ...recruitWriteSpecificObejct,
  })
  .refine((data) => new Date(data.close_at) > new Date(), {
    message: '마감일은 오늘 이후여야 합니다',
    path: ['close_at'],
  })

export type RecruitWriteSchema = z.infer<typeof recruitWriteSchema>

const recruitEditBaseSchema = z
  .object({
    ...recruitWriteCommonObject,
    ...recruitEditSpecificObject,
  })
  .refine((data) => !data.close_at || new Date(data.close_at) > new Date(), {
    message: '마감일은 오늘 이후여야 합니다',
    path: ['close_at'],
  })
export const recruitEditSchema = recruitEditBaseSchema.partial()

import * as z from 'zod'

export const applicationSchema = z
  .object({
    selfIntroduction: z
      .string()
      .trim()
      .min(1, '자기소개를 작성해주세요. (필수입력)')
      .max(500),
    motivation: z
      .string()
      .trim()
      .min(1, '지원 동기를 작성해주세요. (필수입력)')
      .max(500),
    objective: z
      .string()
      .trim()
      .min(1, '스터디 목표를 작성해주세요. (필수입력)')
      .max(500),
    availableTime: z
      .string()
      .trim()
      .min(1, '가능한 시간대를 작성해주세요. (필수입력)')
      .max(500),
    hasStudyExperience: z.boolean().default(false),
    studyExperience: z.string().trim().max(500).optional(),
  })
  .superRefine((vel, ctx) => {
    if (vel.hasStudyExperience && !vel.studyExperience?.trim().length) {
      ctx.addIssue({
        code: 'custom',
        path: ['studyExperience'],
        message: '경험을 체크했다면 간단히 작성해주세요.',
      })
    }
  })

export type ApplicationForm = z.infer<typeof applicationSchema>

export const RECRUIT_WRITE_CONFIG = {
  MAX_PERSONNEL: 10,
  MAX_IMAGE: 5,
  MAX_IMAGE_FILE_SIZE: '5MB',
  MAX_TAG: 5,
  MAX_ATTACHMENT: 3,
  MAX_ATTACHMENT_SIZE: 5_000_000,
} as const

export const CHAT_CONFIG = {
  MAX_CHAT_MESSAGE: 300,
} as const

// export const PRESINGED_ENDPOINT = '/studies/groups/presigned-url'
export const PRESINGED_ENDPOINT = '/recruitments/presigned_url'

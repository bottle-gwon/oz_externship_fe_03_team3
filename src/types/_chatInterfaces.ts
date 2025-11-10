export interface MessageList {
  id: number
  sender_id: number
  sender_nickname: string
  // study_group_id: number
  content: string
  // file_url: string | null
  is_read: boolean
  created_at: string
  updated_at: string
}

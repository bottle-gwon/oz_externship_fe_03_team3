import api from '@/api/api'
import { PRESINGED_ENDPOINT } from '@/utils/constants'

const postFileForPresignedUrl = async (file: File) => {
  const metaData = {
    file_name: file.name,
    content_type: file.type,
    file_size: file.size,
  }

  // TODO: 조교님께서 고쳐주신 다음 recruitment로 되돌려야 합니다
  const responseUrl = await api.post(PRESINGED_ENDPOINT, [metaData])
  const { file_url, url, fields } = responseUrl.data.data[0]
  const fieldsEntryArray = Object.entries(fields) as [string, string][]

  const formData = new FormData()
  fieldsEntryArray.forEach((entry) => formData.append(...entry))
  formData.append('file', file)

  await api.post(url, formData)

  return file_url
}

export default postFileForPresignedUrl

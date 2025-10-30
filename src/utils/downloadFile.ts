import api from '@/api/api'

const downloadFile = async (url: string, file_name: string) => {
  const response = await api.get(url, { responseType: 'blob' })
  const blob = response.data
  const fileURL = URL.createObjectURL(blob) // Create a temporary URL for the Blob

  const link = document.createElement('a')
  link.href = fileURL
  link.setAttribute('download', file_name) // Suggested filename for download
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  URL.revokeObjectURL(fileURL) // Clean up the temporary URL
}

export default downloadFile

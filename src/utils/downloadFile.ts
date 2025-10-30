import api from '@/api/api'

const downloadFile = async (url: string) => {
  const respone = await api.get(url, { responseType: 'blob' })

  //   .then(response => {
  //       // response.data is now a Blob object
  //       const blob = response.data;
  //       const fileURL = URL.createObjectURL(blob); // Create a temporary URL for the Blob
  //       // You can then use fileURL to display images, initiate downloads, etc.
  //       const link = document.createElement('a');
  //       link.href = fileURL;
  //       link.setAttribute('download', 'filename.ext'); // Suggested filename for download
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //       URL.revokeObjectURL(fileURL); // Clean up the temporary URL
  //   })
  //   .catch(error => {
  //       console.error('Download failed:', error);
  //   });
  // const init = {
  //   method: 'GET',
  // }
  //
  // fetch(url, init)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`)
  //     }
  //     return response.blob()
  //   })
  //   .then((blob) => {
  //     // Create download - browser will handle the filename from Content-Disposition header
  //     const downloadUrl = window.URL.createObjectURL(blob)
  //     const link = document.createElement('a')
  //     link.href = downloadUrl
  //     link.download = '' // Empty download attribute lets browser use server's filename
  //
  //     // Trigger download
  //     document.body.appendChild(link)
  //     link.click()
  //
  //     // Cleanup
  //     document.body.removeChild(link)
  //     window.URL.revokeObjectURL(downloadUrl)
  //
  //     if (callback) {
  //       callback({ success: true })
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Download error:', error)
  //     if (callback) {
  //       callback({ success: false, error: error.message })
  //     }
  //   })
}

export default downloadFile

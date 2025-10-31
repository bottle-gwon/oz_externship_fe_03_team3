import useStudyHubStore from '@/store/store'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { Accept: 'application/json' },
  timeout: 5000,
})

// 요청 인터셉터
api.interceptors.request.use((config) => {
  const state = useStudyHubStore.getState()
  const accessToken = state.accessToken

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

// 응답 인터셉터
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      // 토큰 재발급 시도
      try {
        const response = await api.post('/auth/refresh')

        const statusCode = response.status
        const responseData = response.data

        if (statusCode !== 200) {
          throw new Error(`${statusCode}에러 ${responseData?.data.error}`)
        }

        // 발급 받은 access토큰 저장
        const state = useStudyHubStore.getState()
        const setAccessToken = state.setAccessToken
        const newAccessToken = responseData.data.access_token
        setAccessToken(newAccessToken)

        // 요청 재시도
        return api(error.config)
      } catch (error) {
        // 재발급 실패 -> 로그인 페이지로
        window.location.href = import.meta.env.VITE_LOGIN_PAGE_URL

        if (error instanceof Error) {
          throw error
        } else {
          throw new Error(String(error))
        }
      }
    }
    return Promise.reject(error)
  }
)

export default api

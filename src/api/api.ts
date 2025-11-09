import useStudyHubStore from '@/store/store'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { Accept: 'application/json' },
  timeout: 5000,
})

export const subApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { Accept: 'application/json' },
  timeout: 5000,
})

// 요청 인터셉터
// NOTE: 액세스 토큰은 요청 실패하고 발급받는 게 아니라 요청 전에 없으면 요청합니다
api.interceptors.request.use(async (config) => {
  const state = useStudyHubStore.getState()
  let accessToken = state.accessToken

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
  }

  try {
    const response = await subApi.post('/auth/refresh')
    accessToken = response.data.data.access

    const responseMe = await subApi.get('/users/me ', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    const me = responseMe.data

    const state = useStudyHubStore.getState()
    const setAccessToken = state.setAccessToken
    const setMe = state.setMe

    setAccessToken(accessToken)
    setMe(me)

    config.headers.Authorization = `Bearer ${accessToken}`
    return config
  } catch {
    return config
  }
})

export default api

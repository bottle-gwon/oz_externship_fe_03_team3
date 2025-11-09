import useStudyHubStore from '@/store/store'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { Accept: 'application/json' },
  timeout: 5000,
})

// NOTE: 인터셉터 안에서 api를 쓰면 무한 요청이 일어납니다
export const subApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { Accept: 'application/json' },
  timeout: 5000,
})

const getRefreshAndMe = async (): Promise<string> => {
  const response = await subApi.post('/auth/refresh')
  const accessToken = response.data.data.access

  const responseMe = await subApi.get('/users/me ', {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const me = responseMe.data

  const state = useStudyHubStore.getState()
  const setAccessToken = state.setAccessToken
  const setMe = state.setMe

  setAccessToken(accessToken)
  setMe(me)

  return accessToken
}

// 요청 인터셉터
// NOTE: 액세스 토큰이 없다면 요청 전에 받습니다
api.interceptors.request.use(async (config) => {
  const state = useStudyHubStore.getState()
  let accessToken = state.accessToken

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
  }

  try {
    accessToken = await getRefreshAndMe()
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
  } catch {
    return config
  }
})

// NOTE: 가지고 있는 토큰이 만료되었다고 오류를 받으면 재발급 받습니다
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status !== 401) {
      return Promise.reject(error)
    }

    // 1) 토큰 재발급 시도 엔드포인트 호출 (팀 규칙에 맞게)
    try {
      await getRefreshAndMe()
      // 2) 실패했던 요청 재시도
      return api(error.config)
    } catch {
      // 3) 재발급 실패 → 로그인 페이지로
      window.location.href = '/login'
    }
  }
)

export default api

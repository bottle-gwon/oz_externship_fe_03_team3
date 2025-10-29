import axios from 'axios'

// TODO: 추가 작업 부탁드립니다!
export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

type RequestMethod = 'get' | 'post' | 'put' | 'delete' | 'patch'

export const axiosLikeFetch = <T>(
  method: RequestMethod,
  url: string,
  body?: T
) => {}

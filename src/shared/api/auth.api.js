import api from './axios'

export const loginApi = (payload) => {
  return api.post('/login', payload)
}

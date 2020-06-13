import api from '@/services/api'
import { post} from '@/utils/request'
import { FETCH_LOGIN } from '@/constants/actionTypes'
export function toLogin(option) {
  return {
    type: FETCH_LOGIN,
    payload: post(api.login,option)
  }
}
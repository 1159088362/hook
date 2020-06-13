import api from '@/services/api'
import { get, post } from '@/utils/request'

export function getList (options) {
  return {
    type: 'GET_LIST',
    payload: get(api.userList)
  }
}

export function updateList (options) {
  return {
    type: 'UPDATE_LIST',
    payload: post(api.update,options)
  }
}

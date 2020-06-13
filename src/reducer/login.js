import { FETCH_LOGIN } from '@/constants/actionTypes'
const initialState = {
  PersonInfo:{}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_LOGIN:
    return { ...state, 
      PersonInfo:{username:payload.data.userData.username,
                  password:payload.data.userData.password}
           }
  default:
    return state
  }
}

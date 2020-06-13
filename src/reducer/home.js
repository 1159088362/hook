const initialState = {
  list: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'GET_LIST':
    return { ...state, list: [...payload.users]}
  default:
    return state
  }
}

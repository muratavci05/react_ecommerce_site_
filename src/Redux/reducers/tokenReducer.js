const token = localStorage.getItem('token')
const initialState = {
  token: token ? token : null,
}

export const SET_TOKEN = 'set_token'
export const REMOVE_TOKEN = 'remove_token'

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      localStorage.setItem('token', action.payload.token)
      return { ...state, token: action.payload.token }

    case REMOVE_TOKEN:
      localStorage.removeItem('token')
      return { ...state, token: null }

    default:
      return state
  }
}

export default tokenReducer

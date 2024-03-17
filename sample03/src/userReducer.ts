import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes'
import { User } from './userActions';

const initialState = {
  loading: false,
  users: [],
  error: ''
}

type ActionType =
  { type: typeof FETCH_USERS_REQUEST; } |
  { type: typeof FETCH_USERS_SUCCESS; payload: User[] } |
  { type: typeof FETCH_USERS_FAILURE; payload: {message: string} };

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes'
import { Dispatch } from '@reduxjs/toolkit';

export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
};

export type D =Dispatch<
  ReturnType<typeof fetchUsersRequest> |
  ReturnType<typeof fetchUsersSuccess> |
  ReturnType<typeof fetchUsersFailure>
  >

export const fetchUsers = () => {
  return async (dispatch: D) => {
    dispatch(fetchUsersRequest())
    try {
      const response = await fetch("/users");
      const users = await response.json();
      dispatch(fetchUsersSuccess(users))
    } catch(error: any) {
      if (error instanceof Error) {
        dispatch(fetchUsersFailure(error.message))
      } else {
        dispatch(fetchUsersFailure("internal error"))
      }
    }
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = (users: User[]) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = (error: string) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}
import { createContext, useContext, useState, useReducer } from 'react'
import {
  initialState,
  ReducerAction,
  ReducerState,
  userReducer,
} from './reducer'

interface IUserContext {
  state: ReducerState
  dispatch(action: ReducerAction): void
}

const UserContext = createContext<IUserContext | undefined>(undefined)

type UserProviderProps = {
  children: JSX.Element
}

export function UserProvier({ children }: UserProviderProps) {
  const [state, dispatch] = useReducer(userReducer, initialState)

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)

  return context
}

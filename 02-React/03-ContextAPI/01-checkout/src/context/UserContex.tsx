import { createContext, useContext, useState } from 'react'

interface IUserContext {
  name: string
}

const UserContext = createContext<IUserContext | undefined>(undefined)

type UserProviderProps = {
  children: JSX.Element
}

export function UserProvier({ children }: UserProviderProps) {
  const [user, setUser] = useState({
    name: 'Nicks',
  })

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)

  return context
}

import { createContext, useContext, useState } from 'react'

interface IUserContext {
  name: string
  updateUserName(name: string): void
}

const UserContext = createContext<IUserContext | undefined>(undefined)

type UserProviderProps = {
  children: JSX.Element
}

export function UserProvier({ children }: UserProviderProps) {
  const [user, setUser] = useState({
    name: 'Nick',
  })

  function updateUserName(name: string) {
    if (name === 'Niko') {
      setUser({
        name: `YOU CAN'T USE THIS NAME`,
      })

      return
    }

    setUser({
      name: name,
    })
  }

  return (
    <UserContext.Provider value={{ ...user, updateUserName }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)

  return context
}

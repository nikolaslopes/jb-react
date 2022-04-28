import { useUser } from '../../context/UserContex'
import { Container, InputName, Message } from './styled'

export function Profile() {
  const user = useUser()

  return (
    <Container>
      <Message></Message>
      <InputName
        value={user?.name}
        onChange={(event) => {
          user?.updateUserName(event.target.value)
        }}
      />
    </Container>
  )
}

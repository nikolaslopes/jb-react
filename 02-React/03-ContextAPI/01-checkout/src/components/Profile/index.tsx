import { useUser } from '../../context/UserContext'
import { Container, InputName, Message } from './styled'

export function Profile() {
  const user = useUser()

  return (
    <Container>
      <Message></Message>
      <InputName
        value={user?.state.name}
        onChange={(event) => {
          user?.dispatch({
            type: 'update_name',
            newName: event.target.value,
          })
        }}
      />
    </Container>
  )
}

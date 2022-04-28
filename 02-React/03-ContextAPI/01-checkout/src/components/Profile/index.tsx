import { useUser } from '../../context/UserContext'
import { Container, InputName, Message } from './styled'

export function Profile() {
  const user = useUser()

  return (
    <Container>
      <InputName
        placeholder="Seu nome"
        value={user?.state.name}
        onChange={(event) => {
          user?.dispatch({
            type: 'update_name',
            newName: event.target.value,
          })
        }}
      />
      <Message>ID: {user?.state.id}</Message>
      <Message>Token: {user?.state.token}</Message>
      <button
        onClick={() => {
          user?.dispatch({
            type: 'update_token',
            newToken: String(
              `KLX_UPT_N_OSP_EW_A2-${Math.ceil(Math.random() * 10000)}`
            ),
          })
          user?.dispatch({
            type: 'update_id',
            newID: String(
              `${user.state.name.toLowerCase()}_${Math.round(
                Math.random() * 100
              )}`
            ),
          })
        }}
      >
        Atualizar token
      </button>
    </Container>
  )
}

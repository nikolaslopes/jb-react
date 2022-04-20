import { Api } from '../../services/api'

export const getFuel = async () => {
  const request = await Api.get('fuel')

  console.log(request.data)
}

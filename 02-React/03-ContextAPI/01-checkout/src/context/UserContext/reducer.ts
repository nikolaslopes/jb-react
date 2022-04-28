export type ReducerState = { name: string; id: string; token: string }
export type ReducerAction =
  | { type: 'update_name'; newName: string }
  | { type: 'update_id'; newID: string }
  | { type: 'update_token'; newToken: string }

export const initialState = {
  name: '',
  id: '',
  token: '',
}

export function userReducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case 'update_name':
      return { ...state, name: action.newName }

    case 'update_id':
      return { ...state, id: action.newID }

    case 'update_token':
      return { ...state, token: action.newToken }

    default:
      return state
  }
}

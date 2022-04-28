export type ReducerState = { name: string; id: number }
export type ReducerAction =
  | { type: 'update_name'; newName: string }
  | { type: 'update_id'; newID: number }

export function useReducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case 'update_name':
      return { ...state, name: action.newName }

    case 'update_id':
      return { ...state, id: action.newID }

    default:
      return state
  }
}

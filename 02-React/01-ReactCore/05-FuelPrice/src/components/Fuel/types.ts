export interface IFuel {
  id: number
  name: string
  price: number
}

export type FuelProps = {
  editMode: boolean
  toggleEditMode: () => void
}

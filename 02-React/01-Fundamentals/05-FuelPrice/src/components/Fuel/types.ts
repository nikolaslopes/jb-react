export interface IFuel {
  id: number
  name: string
  price: number
}

export interface IFuelState extends IFuel {
  updated: boolean
}

export type FuelProps = {
  editMode: boolean
  toggleEditMode: () => void
}

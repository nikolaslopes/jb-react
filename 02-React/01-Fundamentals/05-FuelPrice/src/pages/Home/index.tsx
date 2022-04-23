import { useState } from 'react'
import { Fuel } from '../../components/Fuel'

export function Home() {
  const [editMode, setEditMode] = useState(false)

  function toggleEditMode() {
    setEditMode((prevState) => !prevState)
  }

  return <Fuel editMode={editMode} toggleEditMode={toggleEditMode} />
}

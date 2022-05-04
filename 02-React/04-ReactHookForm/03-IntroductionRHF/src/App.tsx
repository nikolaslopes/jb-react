import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  nameRequired: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'all',
    delayError: 300,
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('name')) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register('name')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('nameRequired', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.nameRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}

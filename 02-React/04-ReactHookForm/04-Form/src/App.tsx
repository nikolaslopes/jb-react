import './App.css'
import { Title, FormGroup, SubmitButton } from './components/styles'
import ReactInputMask from 'react-input-mask'
import { Controller, useForm } from 'react-hook-form'

interface IForm {
  name: string
  email: string
  cpf: string
}

function App() {
  const { register, handleSubmit, control, formState } = useForm<IForm>({
    mode: 'all',
    delayError: 200,
  })

  function onSubmitHandler(values: any) {
    console.log(values)
  }

  return (
    <div className="App">
      <Title>Complete seus dados</Title>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormGroup>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Insira o nome"
            {...register('name', { required: true })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="Insira o e-mail"
            {...register('email', { required: true })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="cpf">CPF</label>
          <Controller
            name="cpf"
            control={control}
            defaultValue=""
            render={({ field }) => {
              return (
                <ReactInputMask
                  mask="999.999.999-999"
                  placeholder="Insira o CPF"
                  {...register('cpf')}
                  {...field}
                />
              )
            }}
          />
        </FormGroup>

        <SubmitButton>Enviar</SubmitButton>
      </form>
    </div>
  )
}

export default App

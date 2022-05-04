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

      <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        <FormGroup>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Insira o nome"
            className={formState.errors.name ? 'error' : ''}
            {...register('name', { required: true })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="Insira o e-mail"
            className={formState.errors.email ? 'error' : ''}
            {...register('email', { required: true })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="cpf">CPF</label>
          <Controller
            name="cpf"
            control={control}
            defaultValue="aa"
            render={({ field }) => {
              return (
                <ReactInputMask
                  mask="999.999.999-999"
                  placeholder="Insira o CPF"
                  className={formState.errors.cpf ? 'error' : ''}
                  {...register('cpf', { required: true })}
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

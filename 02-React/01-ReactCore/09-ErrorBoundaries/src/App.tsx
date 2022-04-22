import { ErrorBoundary, useErrorHandler } from 'react-error-boundary'

const Counter = (props: any) => {
  return <h1>The total couinter is {props.counter.toFixed(2)}</h1>
}

const ErrorHandler = () => {
  return <h1>Something went wrong</h1>
}

function notifyError() {
  // * call apis or services that can help to solve the error
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorHandler}
        onError={(arg1, arg2) => {
          console.log('arg1', arg1, 'arg2', arg2)
        }}
      >
        <Counter />
      </ErrorBoundary>
    </div>
  )
}

export default App

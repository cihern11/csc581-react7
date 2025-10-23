import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1);
  }

  function incrementThree() {
    setCount(count + 3);
  }

  function incrementNine() {
    setCount(count + 9);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => increment()}>+1</button>
        <button onClick={() => {
          incrementThree();
        }}>+3</button>
        <button onClick={() => {
          incrementNine();
        }}>+9</button>

      <h1>Count: {count}</h1>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <a href="https://www.ze.delivery/" target="_blank">
          <img src="/ze-logo.svg" className="logo" alt="Zé Delivery" />
        </a>
      </header>
      <h1>Zé Delivery</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <footer>
        <p>Informações de Rodapé</p>
      </footer>

    </div>
  )
}

export default App

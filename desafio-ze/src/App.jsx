import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  function handleChange(){
    console.log("teste")
  }

  return (
    <div className="App">
      <header>
        <a href="https://www.ze.delivery/" target="_blank">
          <img src="/ze-logo-completo.avif" className="logo" alt="Zé Delivery" />
        </a>
      </header>
      <h1>Zé Delivery</h1>
      <div className="card">
      <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
      </form>
      </div>
      <footer>
        <p>ZE SOLUCOES TECNOLOGICAS DE COMERCIO DE BEBIDAS LTDA. - CNPJ: 37.657.197/0001-46 </p>
        <p>Rua Fradique Coutinho, 1632 - CEP: 05.416-002 </p>
        <p>Pinheiros - São Paulo/SP</p>
      </footer>

    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MeuComponente from './components/MeuComponente'
import MeuBotao from './components/MeuBotao'
import MeuContador from './components/MeuContador'
import MinhaLista from './components/MinhaLista'
import BuscandoDados from './components/BuscandoDados'
import './style.css'
//Para funcionar no navegaodor:  npm run dev

function App() {
 
  return (
    <div>   
      
      <h1>Listas no React:</h1>
    
  <MeuComponente/>
  <MeuContador/>
  <MeuBotao conteudo='clique aqui'/>
  <MinhaLista />
  <BuscandoDados />




    </div>

    

  )
}



export default App

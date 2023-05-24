
import {useState} from 'react'
export default function MeuContador() {
  
    const [contador, setContador] = useState(0)

    function aumentar() {
      setContador(contador + 1) 
    }
    
    function diminuir() {
      setContador(contador - 1) 
    }
    function zerar() {
      setContador(0);
    }

    return (
        <div className='contador'>
        <h2>Meu Contador</h2>
        <h3>{contador}</h3>
        { contador > 9 ? <h2>Valor Muito alto</h2> :<h2>Valor Muito Baixo</h2>}
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
        <button onClick={zerar}>Zerar</button>


        </div>
    )
}

import { useState } from 'react'
import { Boton } from './Boton'
import './App.css'
import { Contador } from './Contador'
import { Logo } from './Logo'

function App() {
  const [count, setCount] = useState(0)

  const incrementar = ()=>{
    setCount(count + 1);
  }

  const reiniciar = ()=>{
    setCount(0)
  }

  return (
    <>
      <Logo/>
      <div className="card">
        <Contador count={count}/>
        <Boton texto={"Click"} claseBoton={"click"} manejarClick={incrementar}/>
        <Boton texto={"Reiniciar"} claseBoton={"reiniciar"} manejarClick={reiniciar}/>
      </div>
    </>
  )
}

export default App

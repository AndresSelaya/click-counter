import React, { useState } from 'react'
import { Boton } from './Boton'
import './App.css'
import { Contador } from './Contador'
import { Logo } from './Logo'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count : 0
    }
    this.incrementar = this.incrementar.bind(this)
    this.reiniciar = this.reiniciar.bind(this)
  }

  incrementar(){
    this.setState(({count})=>({count: count + 1}))
  }

  reiniciar(){
    this.setState({count : 0})
  }

  render(){
    return (
      <>
        <Logo/>
        <div className="card">
          <Contador count={this.state.count}/>
          <Boton texto={"Click"} claseBoton={"click"} manejarClick={this.incrementar}/>
          <Boton texto={"Reiniciar"} claseBoton={"reiniciar"} manejarClick={this.reiniciar}/>
        </div>
      </>
    )
  }
}

export default App

import { useState } from 'react'
import { BaseColaboradores } from './mocks/data'
import './App.css'
import Header from './components/Header'
import Inputs from './components/Inputs'
import Lista from './components/Lista'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(colaboradores)

  const agregarColaborador = (nuevoColaboradors) => {
    const id = (colaboradores.length + 1).toString();
    const { nombre, correo } = nuevoColaboradors
    const nuevoColaborador = { id: id, nombre: nombre, correo: correo }
    setColaboradores([...colaboradores, nuevoColaborador])
    setColaboradoresFiltrados([...colaboradores, nuevoColaborador])
  }
  
  const filtrarColaborador = (e) => {
    const newColaboradores = [...colaboradores]
    const valor = e.target.value
    const colaboradoresFiltrados = newColaboradores.filter((colaborador) => {
      return colaborador.nombre.toLowerCase().includes(valor.toLowerCase())
    })
    setColaboradoresFiltrados(colaboradoresFiltrados)

  }

  return (
    <>
      <Header onChange={filtrarColaborador}/>
      <Inputs onClick={agregarColaborador}/>
      <Lista colaboradores={colaboradoresFiltrados}/>
    </>
  )
}

export default App

import React from "react"
import { useState } from "react"
import Footer from "./components/Footer"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  
  const[pacientes,setPacientes] =useState([])
  const[paciente,setPaciente] =useState({})

  return (
    <div className="container mx-auto">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente}/>
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
